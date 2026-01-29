'use client'

import { useState } from 'react'
import CalorieTrackerFullPage from '@/app/components/CalorieTrackerFullPage'
import MealLogger from '@/app/components/MealLogger'
import TrackingDashboard from '@/app/components/TrackingDashboard'
import styles from './calories.module.css'

export default function CaloriesPage() {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  )

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(e.target.value)
  }

  return (
    <div className={styles.container}>
      {/* Full Page Tracker */}
      <section className={styles.section}>
        <CalorieTrackerFullPage />
      </section>

      {/* Daily Tracking Section */}
      <section className={styles.section}>
        <div className={styles.trackerHeader}>
          <h2>Daily Tracker</h2>
          <input
            type="date"
            value={currentDate}
            onChange={handleDateChange}
            className={styles.datePicker}
          />
        </div>

        <div className={styles.trackerContent}>
          <MealLogger date={currentDate} />
          <TrackingDashboard date={currentDate} />
        </div>
      </section>
    </div>
  )
}
