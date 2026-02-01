'use client'

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

export interface Meal {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  time: string
  date: string
}

export interface DailyTracking {
  date: string
  meals: Meal[]
  dailyGoal: number
  bmr: number
}

export interface CaloriesContextType {
  dailyTrackings: DailyTracking[]
  currentDate: string
  bmrData: {
    maintenance: number
    target: number
    gender: string
    weight: number
    height: number
    age: number
    activity: string
    goal: string
  } | null
  addMeal: (meal: Meal) => void
  removeMeal: (mealId: string) => void
  editMeal: (mealId: string, meal: Meal) => void
  setBmrData: (data: any) => void
  getCurrentDayMeals: () => Meal[]
  getTodayStats: () => {
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    remaining: number
  }
  getWeeklyStats: () => {
    dates: string[]
    calories: number[]
    goals: number[]
  }
}

const CaloriesContext = createContext<CaloriesContextType | undefined>(undefined)

export const CaloriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dailyTrackings, setDailyTrackings] = useState<DailyTracking[]>([])
  const [currentDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [bmrData, setBmrData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    try {
      const saved = localStorage.getItem('caloriesData')
      const savedBmr = localStorage.getItem('bmrData')
      
      if (saved) {
        setDailyTrackings(JSON.parse(saved))
      }
      if (savedBmr) {
        setBmrData(JSON.parse(savedBmr))
      }
    } catch (e) {
      console.error('Failed to load data from localStorage:', e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (typeof window === 'undefined' || isLoading) return
    
    try {
      localStorage.setItem('caloriesData', JSON.stringify(dailyTrackings))
    } catch (e) {
      console.error('Failed to save calories data:', e)
    }
  }, [dailyTrackings, isLoading])

  useEffect(() => {
    if (typeof window === 'undefined' || isLoading) return
    
    try {
      if (bmrData) {
        localStorage.setItem('bmrData', JSON.stringify(bmrData))
      }
    } catch (e) {
      console.error('Failed to save BMR data:', e)
    }
  }, [bmrData, isLoading])

  const addMeal = (meal: Meal) => {
    setDailyTrackings((prev) => {
      const existing = prev.find((t) => t.date === meal.date)
      if (existing) {
        return prev.map((t) =>
          t.date === meal.date
            ? { ...t, meals: [...t.meals, meal] }
            : t
        )
      }
      return [
        ...prev,
        {
          date: meal.date,
          meals: [meal],
          dailyGoal: bmrData?.target || 2000,
          bmr: bmrData?.maintenance || 1800,
        },
      ]
    })
  }

  const removeMeal = (mealId: string) => {
    setDailyTrackings((prev) =>
      prev.map((t) => ({
        ...t,
        meals: t.meals.filter((m) => m.id !== mealId),
      }))
    )
  }

  const editMeal = (mealId: string, updatedMeal: Meal) => {
    setDailyTrackings((prev) =>
      prev.map((t) => ({
        ...t,
        meals: t.meals.map((m) => (m.id === mealId ? updatedMeal : m)),
      }))
    )
  }

  const getCurrentDayMeals = (): Meal[] => {
    const today = dailyTrackings.find((t) => t.date === currentDate)
    return today?.meals || []
  }

  const getTodayStats = () => {
    const meals = getCurrentDayMeals()
    const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0)
    const totalProtein = meals.reduce((sum, m) => sum + m.protein, 0)
    const totalCarbs = meals.reduce((sum, m) => sum + m.carbs, 0)
    const totalFat = meals.reduce((sum, m) => sum + m.fat, 0)
    const dailyGoal = bmrData?.target || 2000
    const remaining = dailyGoal - totalCalories

    return {
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat,
      remaining,
    }
  }

  const getWeeklyStats = () => {
    const dates: string[] = []
    const calories: number[] = []
    const goals: number[] = []

    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      dates.push(dateStr)

      const dayData = dailyTrackings.find((t) => t.date === dateStr)
      calories.push(dayData?.meals.reduce((sum, m) => sum + m.calories, 0) || 0)
      goals.push(dayData?.dailyGoal || bmrData?.target || 2000)
    }

    return { dates, calories, goals }
  }

  const memoizedValue = useMemo(
    () => ({
      dailyTrackings,
      currentDate,
      bmrData,
      addMeal,
      removeMeal,
      editMeal,
      setBmrData,
      getCurrentDayMeals,
      getTodayStats,
      getWeeklyStats,
    }),
    [dailyTrackings, currentDate, bmrData]
  )

  return (
    <CaloriesContext.Provider value={memoizedValue}>
      {children}
    </CaloriesContext.Provider>
  )
}

export const useCalories = () => {
  const context = useContext(CaloriesContext)
  if (!context) {
    throw new Error('useCalories must be used within CaloriesProvider')
  }
  return context
}
