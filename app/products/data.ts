import { Language } from '../lib/translations'

export type MealType = 'breakfast' | 'dessert' | 'lunch' | 'snack' | 'combo'

export interface Product {
  id: string
  name: {
    vi: string
    en: string
  }
  description: {
    vi: string
    en: string
  }
  price: string
  priceValue: number
  category: string
  mealType: MealType
  calories: string
  emoji: string
  image: string
  fullDescription: {
    vi: string
    en: string
  }
  ingredients: {
    vi: string[]
    en: string[]
  }
  nutrition: {
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  benefits: {
    vi: string[]
    en: string[]
  }
  allergens: {
    vi: string[]
    en: string[]
  }
}

export const products: Product[] = [
  // ============= BUỔI SÁNG / BREAKFAST =============
  {
    id: 'breakfast-1',
    name: {
      vi: 'Sữa chua Hy Lạp trái cây hạt',
      en: 'Greek Yogurt with Fruits & Nuts'
    },
    description: {
      vi: 'Sữa chua Hy Lạp nguyên chất, hạnh nhân, óc chó, quả mọng tươi, mật ong',
      en: 'Pure Greek yogurt, almonds, walnuts, fresh berries, honey'
    },
    price: '45.000đ',
    priceValue: 45000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '320 kcal',
    emoji: '🥛',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&w=800&fit=crop',
    fullDescription: {
      vi: 'Sữa chua Hy Lạp trái cây hạt là bữa sáng hoàn hảo với sữa chua Hy Lạp nguyên chất giàu protein và probiotics. Kết hợp với hạnh nhân, óc chó giàu chất béo lành mạnh, quả mọng tươi chứa đầy chất chống oxy hóa và mật ong tự nhiên ngọt dịu. Món ăn sáng lý tưởng cho người muốn khởi đầu ngày mới đầy năng lượng.',
      en: 'Greek yogurt with fruits and nuts is the perfect breakfast with pure Greek yogurt rich in protein and probiotics. Combined with almonds and walnuts rich in healthy fats, fresh berries full of antioxidants and natural honey with gentle sweetness. The ideal breakfast meal for those who want to start the day full of energy.'
    },
    ingredients: {
      vi: [
        'Sữa chua Hy Lạp nguyên chất - 200g',
        'Hạnh nhân rang - 20g',
        'Óc chó - 15g',
        'Quả việt quất tươi - 30g',
        'Dâu tây - 40g',
        'Mâm xôi - 20g',
        'Mật ong nguyên chất - 15ml',
        'Bạc hà tươi'
      ],
      en: [
        'Pure Greek yogurt - 200g',
        'Roasted almonds - 20g',
        'Walnuts - 15g',
        'Fresh blueberries - 30g',
        'Strawberries - 40g',
        'Raspberries - 20g',
        'Pure honey - 15ml',
        'Fresh mint'
      ]
    },
    nutrition: {
      protein: '18g',
      carbs: '38g',
      fat: '12g',
      fiber: '6g'
    },
    benefits: {
      vi: [
        'Protein cao từ sữa chua Hy Lạp',
        'Probiotics tốt cho đường ruột',
        'Chất béo lành mạnh từ hạt',
        'Chống oxy hóa từ quả mọng',
        'Calcium cho xương chắc khỏe',
        'Năng lượng bền vững cho cả ngày'
      ],
      en: [
        'High protein from Greek yogurt',
        'Probiotics good for gut health',
        'Healthy fats from nuts',
        'Antioxidants from berries',
        'Calcium for strong bones',
        'Sustained energy for the day'
      ]
    },
    allergens: {
      vi: ['Sữa', 'Hạt (hạnh nhân, óc chó)'],
      en: ['Dairy', 'Nuts (almonds, walnuts)']
    }
  },
  {
    id: 'breakfast-2',
    name: {
      vi: 'Trứng cuộn ăn kèm cơm đại mạch',
      en: 'Egg Roll with Barley Rice'
    },
    description: {
      vi: 'Trứng cuộn rau củ, cơm đại mạch, rau củ hấp',
      en: 'Vegetable egg roll, barley rice, steamed vegetables'
    },
    price: '55.000đ',
    priceValue: 55000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '420 kcal',
    emoji: '🍳',
    image: 'https://i.pinimg.com/736x/18/d6/83/18d683c8062a3b29e44cc95a1767a6c0.jpg',
    fullDescription: {
      vi: 'Trứng cuộn ăn kèm cơm đại mạch là bữa sáng đầy đủ dinh dưỡng với trứng cuộn nhồi đầy rau củ tươi, kết hợp cơm đại mạch giàu chất xơ và rau củ hấp nhiều màu sắc. Món ăn mang phong cách Á Đông hiện đại, cân bằng giữa protein, carb phức hợp và vitamin.',
      en: 'Egg roll with barley rice is a nutritionally complete breakfast with egg roll stuffed with fresh vegetables, combined with fiber-rich barley rice and colorful steamed vegetables. A modern Asian-style dish, balanced between protein, complex carbs and vitamins.'
    },
    ingredients: {
      vi: [
        'Trứng gà omega-3 - 2 quả',
        'Cơm đại mạch nấu chín - 150g',
        'Bông cải xanh hấp - 80g',
        'Cà rốt baby - 60g',
        'Hành lá',
        'Rau mùi tây',
        'Nước tương nhạt',
        'Dầu olive'
      ],
      en: [
        'Omega-3 eggs - 2 pieces',
        'Cooked barley rice - 150g',
        'Steamed broccoli - 80g',
        'Baby carrots - 60g',
        'Spring onion',
        'Parsley',
        'Light soy sauce',
        'Olive oil'
      ]
    },
    nutrition: {
      protein: '22g',
      carbs: '52g',
      fat: '10g',
      fiber: '9g'
    },
    benefits: {
      vi: [
        'Protein chất lượng cao từ trứng',
        'Chất xơ từ đại mạch hỗ trợ tiêu hóa',
        'Vitamin từ nhiều loại rau củ',
        'Carb phức hợp giải phóng năng lượng ổn định',
        'Ít chất béo bão hòa'
      ],
      en: [
        'High-quality protein from eggs',
        'Fiber from barley supports digestion',
        'Vitamins from various vegetables',
        'Complex carbs release stable energy',
        'Low saturated fat'
      ]
    },
    allergens: {
      vi: ['Trứng'],
      en: ['Eggs']
    }
  },
  {
    id: 'breakfast-3',
    name: {
      vi: 'Kimbap bò rau củ',
      en: 'Beef Vegetable Kimbap'
    },
    description: {
      vi: 'Kimbap Hàn Quốc với thịt bò, rau củ, trứng',
      en: 'Korean kimbap with beef, vegetables, eggs'
    },
    price: '50.000đ',
    priceValue: 50000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '380 kcal',
    emoji: '🍙',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&w=800&fit=crop',
    fullDescription: {
      vi: 'Kimbap bò rau củ là món ăn sáng tiện lợi theo phong cách Hàn Quốc với cơm trắng cuộn rong biển, nhồi thịt bò nạc, trứng, cà rốt và dưa leo. Dễ ăn, dễ mang theo và đầy đủ dinh dưỡng cho buổi sáng bận rộn.',
      en: 'Beef vegetable kimbap is a convenient Korean-style breakfast with white rice rolled in seaweed, stuffed with lean beef, eggs, carrots and cucumber. Easy to eat, easy to carry and fully nutritious for a busy morning.'
    },
    ingredients: {
      vi: [
        'Cơm Nhật - 200g',
        'Rong biển nori - 2 lá',
        'Thịt bò nạc xào - 80g',
        'Trứng tráng mỏng - 1 quả',
        'Cà rốt luộc - 40g',
        'Dưa leo - 30g',
        'Dầu mè',
        'Muối biển'
      ],
      en: [
        'Japanese rice - 200g',
        'Nori seaweed - 2 sheets',
        'Stir-fried lean beef - 80g',
        'Thin omelet - 1 egg',
        'Boiled carrots - 40g',
        'Cucumber - 30g',
        'Sesame oil',
        'Sea salt'
      ]
    },
    nutrition: {
      protein: '20g',
      carbs: '48g',
      fat: '8g',
      fiber: '4g'
    },
    benefits: {
      vi: [
        'Tiện lợi, dễ mang theo',
        'Protein từ thịt bò và trứng',
        'Khoáng chất từ rong biển',
        'Vitamin A từ cà rốt',
        'Cân bằng dinh dưỡng'
      ],
      en: [
        'Convenient, easy to carry',
        'Protein from beef and eggs',
        'Minerals from seaweed',
        'Vitamin A from carrots',
        'Balanced nutrition'
      ]
    },
    allergens: {
      vi: ['Trứng', 'Mè'],
      en: ['Eggs', 'Sesame']
    }
  },
  {
    id: 'breakfast-4',
    name: {
      vi: 'Bánh mì nguyên cám bơ Địa Trung Hải',
      en: 'Mediterranean Avocado Whole Wheat Toast'
    },
    description: {
      vi: 'Bánh mì nguyên cám, bơ, cà chua, phô mai feta',
      en: 'Whole wheat bread, avocado, tomato, feta cheese'
    },
    price: '48.000đ',
    priceValue: 48000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '360 kcal',
    emoji: '🥪',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&w=800&fit=crop',
    fullDescription: {
      vi: 'Bánh mì nguyên cám bơ Địa Trung Hải là bữa sáng theo phong cách Mediterranean với bánh mì whole grain giàu chất xơ, phủ bơ mềm, cà chua bi tươi và phô mai feta. Một bữa sáng đơn giản nhưng đầy hương vị và dinh dưỡng.',
      en: 'Mediterranean avocado whole wheat toast is a Mediterranean-style breakfast with fiber-rich whole grain bread, topped with soft avocado, fresh cherry tomatoes and feta cheese. A simple but flavorful and nutritious breakfast.'
    },
    ingredients: {
      vi: [
        'Bánh mì nguyên cám - 2 lát',
        'Bơ chín - 1/2 trái',
        'Cà chua bi - 50g',
        'Phô mai feta - 30g',
        'Olive đen - 10g',
        'Dầu olive nguyên chất',
        'Tiêu đen, muối biển'
      ],
      en: [
        'Whole wheat bread - 2 slices',
        'Ripe avocado - 1/2 piece',
        'Cherry tomatoes - 50g',
        'Feta cheese - 30g',
        'Black olives - 10g',
        'Extra virgin olive oil',
        'Black pepper, sea salt'
      ]
    },
    nutrition: {
      protein: '14g',
      carbs: '42g',
      fat: '16g',
      fiber: '10g'
    },
    benefits: {
      vi: [
        'Chất xơ cao từ bánh mì nguyên cám',
        'Chất béo lành mạnh từ bơ và olive',
        'Protein từ phô mai',
        'Chống oxy hóa từ cà chua',
        'Tốt cho tim mạch'
      ],
      en: [
        'High fiber from whole wheat bread',
        'Healthy fats from avocado and olives',
        'Protein from cheese',
        'Antioxidants from tomatoes',
        'Good for heart health'
      ]
    },
    allergens: {
      vi: ['Gluten', 'Sữa'],
      en: ['Gluten', 'Dairy']
    }
  },

  // ============= BUỔI TRƯA / LUNCH =============
  {
    id: 'lunch-1',
    name: {
      vi: 'Bún gạo lứt bò',
      en: 'Brown Rice Vermicelli with Beef'
    },
    description: {
      vi: 'Bún gạo lứt, bò nướng, rau sống, sốt trộn đặc biệt',
      en: 'Brown rice vermicelli, grilled beef, fresh herbs, special dressing'
    },
    price: '65.000đ',
    priceValue: 65000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '480 kcal',
    emoji: '🍜',
    image: 'https://i.pinimg.com/736x/0c/ef/92/0cef927874ae213a9c2be012c4c4b90c.jpg',
    fullDescription: {
      vi: 'Bún gạo lứt bò là món ăn trưa hoàn hảo kết hợp giữa bún gạo lứt giàu chất xơ, thịt bò nướng mềm ngon và rau sống tươi mát. Với sốt trộn đặc biệt từ nước mắm, chanh và tỏi, món ăn mang hương vị Việt Nam đích thực nhưng lành mạnh và ít calo.',
      en: 'Brown rice vermicelli with beef is the perfect lunch combining fiber-rich brown rice vermicelli, tender grilled beef and fresh herbs. With special dressing from fish sauce, lemon and garlic, the dish brings authentic Vietnamese flavors but healthy and low calorie.'
    },
    ingredients: {
      vi: [
        'Bún gạo lứt - 200g',
        'Thịt bò nạc nướng - 150g',
        'Xà lách tươi - 50g',
        'Rau thơm (rau mùi, húng quế) - 30g',
        'Dưa leo - 40g',
        'Cà rốt - 30g',
        'Đậu phộng rang - 15g',
        'Sốt nước mắm chanh'
      ],
      en: [
        'Brown rice vermicelli - 200g',
        'Grilled lean beef - 150g',
        'Fresh lettuce - 50g',
        'Fresh herbs (coriander, basil) - 30g',
        'Cucumber - 40g',
        'Carrots - 30g',
        'Roasted peanuts - 15g',
        'Fish sauce lemon dressing'
      ]
    },
    nutrition: {
      protein: '38g',
      carbs: '55g',
      fat: '12g',
      fiber: '8g'
    },
    benefits: {
      vi: [
        'Protein cao từ thịt bò',
        'Carb lành mạnh từ gạo lứt',
        'Vitamin và khoáng chất từ rau sống',
        'Dễ tiêu hóa, nhẹ bụng',
        'Cân bằng dinh dưỡng'
      ],
      en: [
        'High protein from beef',
        'Healthy carbs from brown rice',
        'Vitamins and minerals from fresh herbs',
        'Easy to digest, light on stomach',
        'Balanced nutrition'
      ]
    },
    allergens: {
      vi: ['Đậu phộng', 'Cá (nước mắm)'],
      en: ['Peanuts', 'Fish (fish sauce)']
    }
  },
  {
    id: 'lunch-2',
    name: {
      vi: 'Cơm cá hồi poke bowl',
      en: 'Salmon Poke Bowl'
    },
    description: {
      vi: 'Cá hồi tươi, cơm Nhật, đậu edamame, bơ, rau xanh',
      en: 'Fresh salmon, Japanese rice, edamame, avocado, greens'
    },
    price: '85.000đ',
    priceValue: 85000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '520 kcal',
    emoji: '🍱',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&w=800&fit=crop',
    fullDescription: {
      vi: 'Cơm cá hồi poke bowl là món ăn trưa cao cấp theo phong cách Hawaii với cá hồi tươi sống chất lượng cao, cơm Nhật dẻo thơm, đậu edamame giòn ngọt và bơ béo ngậy. Được bổ sung rau xanh tươi và sốt đặc biệt, đây là bữa ăn hoàn hảo cho sức khỏe và hương vị.',
      en: 'Salmon poke bowl is a premium Hawaiian-style lunch with high-quality fresh raw salmon, fragrant sticky Japanese rice, crispy sweet edamame and creamy avocado. Added with fresh greens and special sauce, this is the perfect meal for health and flavor.'
    },
    ingredients: {
      vi: [
        'Cá hồi sashimi grade - 180g',
        'Cơm Nhật Bản - 150g',
        'Đậu edamame hấp - 60g',
        'Bơ - 1/2 trái',
        'Cà chua bi - 40g',
        'Rong biển wakame - 20g',
        'Mè rang',
        'Sốt ponzu'
      ],
      en: [
        'Sashimi grade salmon - 180g',
        'Japanese rice - 150g',
        'Steamed edamame - 60g',
        'Avocado - 1/2 piece',
        'Cherry tomatoes - 40g',
        'Wakame seaweed - 20g',
        'Roasted sesame',
        'Ponzu sauce'
      ]
    },
    nutrition: {
      protein: '42g',
      carbs: '50g',
      fat: '18g',
      fiber: '7g'
    },
    benefits: {
      vi: [
        'Omega-3 dồi dào từ cá hồi',
        'Protein chất lượng cao',
        'Chất béo lành mạnh từ bơ',
        'Khoáng chất từ rong biển',
        'Tốt cho tim mạch và não bộ'
      ],
      en: [
        'Abundant Omega-3 from salmon',
        'High-quality protein',
        'Healthy fats from avocado',
        'Minerals from seaweed',
        'Good for heart and brain'
      ]
    },
    allergens: {
      vi: ['Cá', 'Đậu nành', 'Mè'],
      en: ['Fish', 'Soy', 'Sesame']
    }
  },
  {
    id: 'lunch-3',
    name: {
      vi: 'Cơm gạo lứt ức gà nướng',
      en: 'Grilled Chicken Bowl with Brown Rice'
    },
    description: {
      vi: 'Ức gà nướng, gạo lứt, salad rau củ tươi',
      en: 'Grilled chicken breast, brown rice, fresh vegetable salad'
    },
    price: '68.000đ',
    priceValue: 68000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '495 kcal',
    emoji: '🍚',
    image: 'https://i.pinimg.com/736x/55/26/88/5526882c8a28ebfd56824a8347779745.jpg',
    fullDescription: {
      vi: 'Cơm gạo lứt ức gà nướng là bữa trưa cân bằng hoàn hảo với ức gà nướng giàu protein, gạo lứt cung cấp carb phức hợp và salad rau củ tươi đa dạng. Món ăn lý tưởng cho người tập gym, vận động viên hoặc bất kỳ ai muốn duy trì lối sống lành mạnh.',
      en: 'Grilled chicken bowl with brown rice is a perfectly balanced lunch with protein-rich grilled chicken breast, brown rice providing complex carbs and diverse fresh vegetable salad. The ideal meal for gym-goers, athletes or anyone who wants to maintain a healthy lifestyle.'
    },
    ingredients: {
      vi: [
        'Ức gà nướng - 180g',
        'Gạo lứt hữu cơ - 150g',
        'Salad rau trộn - 80g',
        'Bơ - 1/4 trái',
        'Hạt quinoa - 30g',
        'Dầu olive',
        'Chanh tươi',
        'Thảo mộc'
      ],
      en: [
        'Grilled chicken breast - 180g',
        'Organic brown rice - 150g',
        'Mixed salad - 80g',
        'Avocado - 1/4 piece',
        'Quinoa - 30g',
        'Olive oil',
        'Fresh lemon',
        'Herbs'
      ]
    },
    nutrition: {
      protein: '45g',
      carbs: '48g',
      fat: '14g',
      fiber: '8g'
    },
    benefits: {
      vi: [
        'Protein rất cao hỗ trợ xây dựng cơ',
        'Gạo lứt giàu vitamin B',
        'Chất béo lành mạnh từ bơ',
        'Chất xơ hỗ trợ tiêu hóa',
        'Ít calo, phù hợp giảm cân'
      ],
      en: [
        'Very high protein supports muscle building',
        'Brown rice rich in vitamin B',
        'Healthy fats from avocado',
        'Fiber supports digestion',
        'Low calorie, suitable for weight loss'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'lunch-4',
    name: {
      vi: 'Gỏi cuốn bò bún lứt',
      en: 'Beef Brown Rice Vermicelli Spring Rolls'
    },
    description: {
      vi: 'Gỏi cuốn với thịt bò, bún lứt, rau sống, sốt đậu phộng',
      en: 'Spring rolls with beef, brown rice vermicelli, fresh herbs, peanut sauce'
    },
    price: '58.000đ',
    priceValue: 58000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '420 kcal',
    emoji: '🌯',
    image: 'https://i.pinimg.com/736x/24/96/a3/2496a3f2a61eef0122ee620b94ad5605.jpg',
    fullDescription: {
      vi: 'Gỏi cuốn bò bún lứt là món ăn nhẹ nhàng nhưng đầy đủ dinh dưỡng với bánh tráng gạo cuộn thịt bò nướng, bún gạo lứt và rau sống tươi mát. Kèm theo sốt đậu phộng béo ngậy, đây là bữa trưa lý tưởng cho ngày hè hoặc khi muốn ăn nhẹ nhưng vẫn no lâu.',
      en: 'Beef brown rice vermicelli spring rolls are a light but nutritious meal with rice paper rolled with grilled beef, brown rice vermicelli and fresh herbs. Served with creamy peanut sauce, this is the ideal lunch for summer days or when you want to eat light but still stay full longer.'
    },
    ingredients: {
      vi: [
        'Bánh tráng gạo - 4 lá',
        'Thịt bò nướng - 120g',
        'Bún gạo lứt - 100g',
        'Xà lách - 40g',
        'Rau thơm - 30g',
        'Dưa leo - 30g',
        'Sốt đậu phộng tự làm'
      ],
      en: [
        'Rice paper - 4 sheets',
        'Grilled beef - 120g',
        'Brown rice vermicelli - 100g',
        'Lettuce - 40g',
        'Fresh herbs - 30g',
        'Cucumber - 30g',
        'Homemade peanut sauce'
      ]
    },
    nutrition: {
      protein: '32g',
      carbs: '45g',
      fat: '12g',
      fiber: '6g'
    },
    benefits: {
      vi: [
        'Nhẹ nhàng, dễ tiêu hóa',
        'Protein từ thịt bò',
        'Vitamin từ rau sống',
        'Ít dầu mỡ',
        'Tươi mát, thanh nhẹ'
      ],
      en: [
        'Light, easy to digest',
        'Protein from beef',
        'Vitamins from fresh herbs',
        'Low oil and fat',
        'Fresh and light'
      ]
    },
    allergens: {
      vi: ['Đậu phộng'],
      en: ['Peanuts']
    }
  },
  {
    id: 'lunch-5',
    name: {
      vi: 'Mì soba bò lạnh',
      en: 'Cold Soba Noodles with Beef'
    },
    description: {
      vi: 'Mì soba lạnh, thịt bò xào, rau sống, sốt mè đặc biệt',
      en: 'Cold soba noodles, stir-fried beef, fresh vegetables, special sesame sauce'
    },
    price: '72.000đ',
    priceValue: 72000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '465 kcal',
    emoji: '🍜',
    image: 'https://i.pinimg.com/736x/01/2f/a7/012fa7681af92d258d4b0b58cf8154ca.jpg',
    fullDescription: {
      vi: 'Mì soba bò lạnh là món ăn Nhật Bản thanh mát với mì soba làm từ kiều mạch giàu dinh dưỡng, thịt bò xào thơm ngon và rau sống tươi giòn. Được chấm với sốt mè đậm đà, món ăn mang lại cảm giác sảng khoái, hoàn hảo cho những ngày nóng.',
      en: 'Cold soba noodles with beef is a refreshing Japanese dish with nutritious buckwheat soba noodles, delicious stir-fried beef and crispy fresh vegetables. Dipped in rich sesame sauce, the dish brings a refreshing feeling, perfect for hot days.'
    },
    ingredients: {
      vi: [
        'M soba (kiều mạch) - 200g',
        'Thịt bò thăn xào - 150g',
        'Xà lách tím - 40g',
        'Cà rốt julienne - 30g',
        'Dưa leo - 30g',
        'Giá đỗ - 20g',
        'Mè rang',
        'Sốt mè nước tương'
      ],
      en: [
        'Soba noodles (buckwheat) - 200g',
        'Stir-fried beef tenderloin - 150g',
        'Purple lettuce - 40g',
        'Julienne carrots - 30g',
        'Cucumber - 30g',
        'Bean sprouts - 20g',
        'Roasted sesame',
        'Sesame soy sauce'
      ]
    },
    nutrition: {
      protein: '36g',
      carbs: '52g',
      fat: '13g',
      fiber: '7g'
    },
    benefits: {
      vi: [
        'Kiều mạch giàu protein thực vật',
        'Ít gluten hơn mì thường',
        'Protein động vật từ bò',
        'Chất xơ hỗ trợ tiêu hóa',
        'Thanh mát, dễ ăn'
      ],
      en: [
        'Buckwheat rich in plant protein',
        'Less gluten than regular noodles',
        'Animal protein from beef',
        'Fiber supports digestion',
        'Refreshing, easy to eat'
      ]
    },
    allergens: {
      vi: ['Kiều mạch', 'Đậu nành', 'Mè'],
      en: ['Buckwheat', 'Soy', 'Sesame']
    }
  },
  {
    id: 'lunch-6',
    name: {
      vi: 'Cá hấp măng tây nước tương',
      en: 'Steamed Fish with Asparagus in Soy Sauce'
    },
    description: {
      vi: 'Cá phi lê hấp, măng tây tươi, nước tương gừng',
      en: 'Steamed fish fillet, fresh asparagus, ginger soy sauce'
    },
    price: '78.000đ',
    priceValue: 78000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '380 kcal',
    emoji: '🐟',
    image: 'https://i.pinimg.com/736x/78/81/72/7881720c754d2e867dff94ad8c03303b.jpg',
    fullDescription: {
      vi: 'Cá hấp măng tây nước tương là món ăn nhẹ nhàng, ít dầu mỡ nhưng vẫn đầy hương vị. Cá phi lê trắng mềm mại được hấp cùng măng tây giòn ngọt, rưới nước tương gừng thơm nồng. Món ăn lành mạnh, giàu protein và ít calo, phù hợp cho mọi lứa tuổi.',
      en: 'Steamed fish with asparagus in soy sauce is a light, low-fat dish but still full of flavor. Soft white fish fillet steamed with crispy sweet asparagus, drizzled with fragrant ginger soy sauce. A healthy meal, rich in protein and low in calories, suitable for all ages.'
    },
    ingredients: {
      vi: [
        'Cá phi lê (cá tuyết/cá rô) - 200g',
        'Măng tây tươi - 100g',
        'Gừng tươi - 15g',
        'Hành lá',
        'Nước tương nhạt',
        'Dầu mè',
        'Cơm trắng (tùy chọn)'
      ],
      en: [
        'Fish fillet (cod/sea bass) - 200g',
        'Fresh asparagus - 100g',
        'Fresh ginger - 15g',
        'Spring onion',
        'Light soy sauce',
        'Sesame oil',
        'White rice (optional)'
      ]
    },
    nutrition: {
      protein: '40g',
      carbs: '12g',
      fat: '8g',
      fiber: '4g'
    },
    benefits: {
      vi: [
        'Protein cao, ít chất béo',
        'Omega-3 từ cá',
        'Vitamin K từ măng tây',
        'Hấp giữ nguyên dinh dưỡng',
        'Ít calo, phù hợp giảm cân'
      ],
      en: [
        'High protein, low fat',
        'Omega-3 from fish',
        'Vitamin K from asparagus',
        'Steaming preserves nutrients',
        'Low calorie, suitable for weight loss'
      ]
    },
    allergens: {
      vi: ['Cá', 'Đậu nành', 'Mè'],
      en: ['Fish', 'Soy', 'Sesame']
    }
  },

  // ============= TRÁNG MIỆNG / DESSERT =============
  {
    id: 'dessert-1',
    name: {
      vi: 'Pudding hạt chia',
      en: 'Chia Seed Pudding'
    },
    description: {
      vi: 'Pudding hạt chia, sữa dừa, trái cây tươi, granola',
      en: 'Chia seed pudding, coconut milk, fresh fruits, granola'
    },
    price: '38.000đ',
    priceValue: 38000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '250 kcal',
    emoji: '🥄',
    image: 'https://i.pinimg.com/736x/82/69/18/82691838d974a094c687e4d294ec6a10.jpg',
    fullDescription: {
      vi: 'Pudding hạt chia là món tráng miệng lành mạnh với hạt chia giàu omega-3 và chất xơ, ngâm trong sữa dừa thơm béo. Được trang trí với xoài tươi ngọt, quả mọng và granola giòn, đây là món tráng miệng vừa ngon vừa bổ dưỡng.',
      en: 'Chia seed pudding is a healthy dessert with chia seeds rich in omega-3 and fiber, soaked in fragrant creamy coconut milk. Decorated with sweet fresh mango, berries and crispy granola, this is a dessert that is both delicious and nutritious.'
    },
    ingredients: {
      vi: [
        'Hạt chia - 40g',
        'Sữa dừa không đường - 250ml',
        'Xoài tươi - 80g',
        'Quả mọng - 30g',
        'Granola yến mạch - 20g',
        'Mật ong - 10ml'
      ],
      en: [
        'Chia seeds - 40g',
        'Unsweetened coconut milk - 250ml',
        'Fresh mango - 80g',
        'Berries - 30g',
        'Oat granola - 20g',
        'Honey - 10ml'
      ]
    },
    nutrition: {
      protein: '8g',
      carbs: '35g',
      fat: '12g',
      fiber: '15g'
    },
    benefits: {
      vi: [
        'Giàu omega-3 tự nhiên',
        'Chất xơ hỗ trợ tiêu hóa',
        'Ít đường, lành mạnh',
        'Vitamin từ trái cây tươi',
        'No lâu, ổn định đường huyết'
      ],
      en: [
        'Rich in natural omega-3',
        'Fiber supports digestion',
        'Low sugar, healthy',
        'Vitamins from fresh fruits',
        'Long-lasting fullness, stabilizes blood sugar'
      ]
    },
    allergens: {
      vi: ['Có thể chứa hạt từ granola'],
      en: ['May contain nuts from granola']
    }
  },
  {
    id: 'dessert-2',
    name: {
      vi: 'Thạch la hán quả sữa dừa',
      en: 'Monk Fruit Herbal Jelly with Coconut Milk'
    },
    description: {
      vi: 'Thạch la hán quả, sữa dừa, trái cây nhiệt đới',
      en: 'Monk fruit jelly, coconut milk, tropical fruits'
    },
    price: '42.000đ',
    priceValue: 42000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '180 kcal',
    emoji: '🍯',
    image: 'https://i.pinimg.com/736x/86/78/ce/8678ce70161a73752018f9b6f897942b.jpg',
    fullDescription: {
      vi: 'Thạch la hán quả sữa dừa là món chè thanh mát với thạch từ la hán quả ngọt tự nhiên, kết hợp sữa dừa béo ngậy và trái cây nhiệt đới tươi ngon. Món tráng miệng lành mạnh không cần đường tinh luyện, phù hợp cho người ăn kiêng và người tiểu đường.',
      en: 'Monk fruit herbal jelly with coconut milk is a refreshing dessert with jelly from naturally sweet monk fruit, combined with creamy coconut milk and delicious tropical fruits. A healthy dessert without refined sugar, suitable for dieters and diabetics.'
    },
    ingredients: {
      vi: [
        'La hán quả - 2 trái',
        'Thạch herbal - 100g',
        'Sữa dừa - 150ml',
        'Dứa tươi - 50g',
        'Thanh long - 40g',
        'Kiwi - 30g',
        'Nước đá'
      ],
      en: [
        'Monk fruit - 2 pieces',
        'Herbal jelly - 100g',
        'Coconut milk - 150ml',
        'Fresh pineapple - 50g',
        'Dragon fruit - 40g',
        'Kiwi - 30g',
        'Ice'
      ]
    },
    nutrition: {
      protein: '2g',
      carbs: '32g',
      fat: '8g',
      fiber: '5g'
    },
    benefits: {
      vi: [
        'Ngọt tự nhiên không cần đường',
        'Thanh mát, giải nhiệt',
        'Vitamin C từ trái cây',
        'Ít calo',
        'An toàn cho người tiểu đường'
      ],
      en: [
        'Naturally sweet without sugar',
        'Refreshing, cooling',
        'Vitamin C from fruits',
        'Low calorie',
        'Safe for diabetics'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'dessert-3',
    name: {
      vi: 'Thạch mác búp trái cây',
      en: 'Aiyu Jelly with Tropical Fruits'
    },
    description: {
      vi: 'Thạch aiyu (mác búp), xoài, dâu, kiwi, sốt kumquat',
      en: 'Aiyu jelly, mango, strawberry, kiwi, kumquat sauce'
    },
    price: '36.000đ',
    priceValue: 36000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '160 kcal',
    emoji: '🍧',
    image: 'https://i.pinimg.com/736x/a0/ff/8c/a0ff8c7d2e87234324ef6b67adfeffc9.jpg',
    fullDescription: {
      vi: 'Thạch mác búp trái cây là món tráng miệng Đài Loan truyền thống với thạch aiyu mát lạnh tự nhiên, kết hợp với xoài ngọt, dâu tươi và kiwi chua nhẹ. Sốt kumquat chua ngọt hài hòa tạo nên món tráng miệng thanh mát, lành mạnh hoàn hảo cho mùa hè.',
      en: 'Aiyu jelly with tropical fruits is a traditional Taiwanese dessert with naturally cooling aiyu jelly, combined with sweet mango, fresh strawberries and slightly sour kiwi. Harmonious sweet and sour kumquat sauce creates a refreshing, perfectly healthy dessert for summer.'
    },
    ingredients: {
      vi: [
        'Thạch aiyu tự làm - 150g',
        'Xoài tươi - 60g',
        'Dâu tây - 40g',
        'Kiwi - 30g',
        'Sốt kumquat - 20ml',
        'Nước đá bào',
        'Lá bạc hà'
      ],
      en: [
        'Homemade aiyu jelly - 150g',
        'Fresh mango - 60g',
        'Strawberries - 40g',
        'Kiwi - 30g',
        'Kumquat sauce - 20ml',
        'Shaved ice',
        'Mint leaves'
      ]
    },
    nutrition: {
      protein: '1g',
      carbs: '38g',
      fat: '0.5g',
      fiber: '6g'
    },
    benefits: {
      vi: [
        'Thanh nhiệt, mát lạnh',
        'Giàu chất xơ từ thạch',
        'Vitamin C từ trái cây',
        'Rất ít chất béo',
        'Hỗ trợ tiêu hóa'
      ],
      en: [
        'Cooling, refreshing',
        'Rich in fiber from jelly',
        'Vitamin C from fruits',
        'Very low fat',
        'Supports digestion'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'dessert-4',
    name: {
      vi: 'Thạch quế hoa sữa dừa trân châu',
      en: 'Osmanthus Jelly with Coconut Milk & Pearls'
    },
    description: {
      vi: 'Thạch quế hoa, sữa dừa, trân châu, thạch đen',
      en: 'Osmanthus jelly, coconut milk, pearls, grass jelly'
    },
    price: '40.000đ',
    priceValue: 40000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '220 kcal',
    emoji: '🧋',
    image: 'https://i.pinimg.com/736x/07/6f/1f/076f1f68083f2af2b916f5cec2217ea4.jpg',
    fullDescription: {
      vi: 'Thạch quế hoa sữa dừa trân châu là món tráng miệng Á Đông hiện đại với hương thơm tinh tế của hoa quế, kết hợp sữa dừa béo ngậy, trân châu mềm dai và thạch đen thanh mát. Một món tráng miệng độc đáo, vừa truyền thống vừa hiện đại.',
      en: 'Osmanthus jelly with coconut milk and pearls is a modern Asian dessert with the delicate fragrance of osmanthus flowers, combined with creamy coconut milk, soft chewy pearls and refreshing grass jelly. A unique dessert, both traditional and modern.'
    },
    ingredients: {
      vi: [
        'Thạch quế hoa - 100g',
        'Sữa dừa tươi - 150ml',
        'Trân châu tapioca - 50g',
        'Thạch đen - 40g',
        'Đường mía tự nhiên - 20g',
        'Nước đá'
      ],
      en: [
        'Osmanthus jelly - 100g',
        'Fresh coconut milk - 150ml',
        'Tapioca pearls - 50g',
        'Grass jelly - 40g',
        'Natural cane sugar - 20g',
        'Ice'
      ]
    },
    nutrition: {
      protein: '3g',
      carbs: '42g',
      fat: '9g',
      fiber: '3g'
    },
    benefits: {
      vi: [
        'Hương thơm thư giãn',
        'Sữa dừa tự nhiên',
        'Nguồn năng lượng nhanh',
        'Texture thú vị',
        'Không chất bảo quản'
      ],
      en: [
        'Relaxing fragrance',
        'Natural coconut milk',
        'Quick energy source',
        'Interesting texture',
        'No preservatives'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'dessert-5',
    name: {
      vi: 'Chè tiết yến nhựa đào',
      en: 'Peach Gum & Snow Swallow Sweet Soup'
    },
    description: {
      vi: 'Nhựa đào, tiết yến, bồ mễ, táo đỏ, hạt sen',
      en: 'Peach gum, snow swallow, white fungus, red dates, lotus seeds'
    },
    price: '48.000đ',
    priceValue: 48000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '200 kcal',
    emoji: '🍲',
    image: 'https://i.pinimg.com/736x/57/94/79/579479cc4c98122ebb350209996786d4.jpg',
    fullDescription: {
      vi: 'Chè tiết yến nhựa đào là món chè dưỡng nhan cao cấp với ba thành phần quý: nhựa đào, tiết yến và bồ mễ, kết hợp với táo đỏ và hạt sen bổ dưỡng. Món chè này không chỉ ngon mà còn có tác dụng làm đẹp da, bổ phổi và tăng cường sức khỏe.',
      en: 'Peach gum and snow swallow sweet soup is a premium beauty-enhancing dessert with three precious ingredients: peach gum, snow swallow and white fungus, combined with nutritious red dates and lotus seeds. This dessert is not only delicious but also has the effect of beautifying skin, nourishing lungs and improving health.'
    },
    ingredients: {
      vi: [
        'Nhựa đào - 30g',
        'Tiết yến - 20g',
        'Bồ mễ tươi - 40g',
        'Táo đỏ - 6 quả',
        'Hạt sen tươi - 30g',
        'Đường phèn - 25g',
        'Nước lọc'
      ],
      en: [
        'Peach gum - 30g',
        'Snow swallow - 20g',
        'Fresh white fungus - 40g',
        'Red dates - 6 pieces',
        'Fresh lotus seeds - 30g',
        'Rock sugar - 25g',
        'Filtered water'
      ]
    },
    nutrition: {
      protein: '4g',
      carbs: '43g',
      fat: '1g',
      fiber: '7g'
    },
    benefits: {
      vi: [
        'Collagen tự nhiên cho da',
        'Bổ phổi, tốt cho hô hấp',
        'Tăng cường hệ miễn dịch',
        'Làm đẹp da từ bên trong',
        'Bổ dưỡng cơ thể'
      ],
      en: [
        'Natural collagen for skin',
        'Nourishes lungs, good for respiratory',
        'Boosts immune system',
        'Beautifies skin from within',
        'Nourishes the body'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },

  // ============= ĐỒ UỐNG / DRINKS =============
  {
    id: 'drink-1',
    name: {
      vi: 'Nước ép chanh dây mật ong',
      en: 'Passion Fruit Juice with Honey'
    },
    description: {
      vi: 'Chanh dây tươi, mật ong nguyên chất, đá lạnh',
      en: 'Fresh passion fruit, pure honey, ice'
    },
    price: '36.000đ',
    priceValue: 36000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '120 kcal',
    emoji: '🍹',
    image: 'https://i.pinimg.com/736x/79/14/80/791480a9878cfb5087eafbb63014443e.jpg',
    fullDescription: {
      vi: 'Nước ép chanh dây mật ong mang vị chua thanh tự nhiên của chanh dây hòa quyện cùng vị ngọt dịu từ mật ong nguyên chất. Thức uống giúp giải nhiệt, bổ sung vitamin C và mang lại cảm giác sảng khoái tức thì.',
      en: 'Passion fruit juice with honey blends the naturally tangy taste of passion fruit with the gentle sweetness of pure honey. This refreshing drink helps cool the body, provides vitamin C, and delivers instant freshness.'
    },
    ingredients: {
      vi: [
        'Chanh dây tươi - 120g',
        'Mật ong nguyên chất - 15ml',
        'Nước lọc - 120ml',
        'Đá viên',
        'Lát chanh trang trí'
      ],
      en: [
        'Fresh passion fruit - 120g',
        'Pure honey - 15ml',
        'Filtered water - 120ml',
        'Ice cubes',
        'Lime slice garnish'
      ]
    },
    nutrition: {
      protein: '1g',
      carbs: '29g',
      fat: '0g',
      fiber: '3g'
    },
    benefits: {
      vi: [
        'Giàu vitamin C',
        'Hỗ trợ tăng đề kháng',
        'Giải nhiệt cơ thể',
        'Vị ngọt tự nhiên từ mật ong'
      ],
      en: [
        'Rich in vitamin C',
        'Supports immunity',
        'Helps cool the body',
        'Naturally sweetened with honey'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'drink-2',
    name: {
      vi: 'Nước ép củ dền',
      en: 'Beetroot Juice'
    },
    description: {
      vi: 'Củ dền tươi ép lạnh, vị ngọt tự nhiên',
      en: 'Cold-pressed fresh beetroot with natural sweetness'
    },
    price: '30.000đ',
    priceValue: 30000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '95 kcal',
    emoji: '🧃',
    image: 'https://i.pinimg.com/736x/25/c3/3a/25c33adb677cce732a27cf18ce26277f.jpg',
    fullDescription: {
      vi: 'Nước ép củ dền là thức uống giàu chất chống oxy hóa với màu đỏ tím đặc trưng. Vị ngọt tự nhiên dễ uống, thích hợp cho người tập luyện hoặc cần bổ sung năng lượng sạch trong ngày.',
      en: 'Beetroot juice is a drink rich in antioxidants, featuring its signature deep red-purple color. Its natural sweetness makes it easy to enjoy and ideal for active people needing clean daily energy.'
    },
    ingredients: {
      vi: [
        'Củ dền tươi - 180g',
        'Táo đỏ - 40g',
        'Nước lọc - 80ml',
        'Đá viên'
      ],
      en: [
        'Fresh beetroot - 180g',
        'Red apple - 40g',
        'Filtered water - 80ml',
        'Ice cubes'
      ]
    },
    nutrition: {
      protein: '2g',
      carbs: '22g',
      fat: '0g',
      fiber: '2g'
    },
    benefits: {
      vi: [
        'Giàu nitrate tự nhiên',
        'Hỗ trợ tuần hoàn máu',
        'Chống oxy hóa cao',
        'Hỗ trợ vận động bền bỉ'
      ],
      en: [
        'Rich in natural nitrates',
        'Supports blood circulation',
        'High in antioxidants',
        'Supports endurance performance'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'drink-3',
    name: {
      vi: 'Nước ép táo - cần tây',
      en: 'Apple Celery Juice'
    },
    description: {
      vi: 'Táo xanh, cần tây tươi, chanh vàng',
      en: 'Green apple, fresh celery, lemon'
    },
    price: '36.000đ',
    priceValue: 36000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '110 kcal',
    emoji: '🥤',
    image: 'https://i.pinimg.com/736x/d5/44/c0/d544c053dc4831fd7a4c1828a89c527f.jpg',
    fullDescription: {
      vi: 'Nước ép táo cần tây là lựa chọn detox nhẹ nhàng với vị thanh mát, ít ngọt. Kết hợp táo xanh và cần tây giúp bổ sung chất xơ hòa tan và khoáng chất thiết yếu.',
      en: 'Apple celery juice is a light detox choice with a crisp, refreshing, and mildly sweet profile. Combining green apple and celery helps provide soluble fiber and essential minerals.'
    },
    ingredients: {
      vi: [
        'Táo xanh - 120g',
        'Cần tây - 80g',
        'Nước cốt chanh - 10ml',
        'Nước lọc - 100ml',
        'Đá viên'
      ],
      en: [
        'Green apple - 120g',
        'Celery - 80g',
        'Lemon juice - 10ml',
        'Filtered water - 100ml',
        'Ice cubes'
      ]
    },
    nutrition: {
      protein: '1g',
      carbs: '24g',
      fat: '0g',
      fiber: '2g'
    },
    benefits: {
      vi: [
        'Thanh lọc nhẹ nhàng',
        'Ít calo, ít đường',
        'Bổ sung vitamin và khoáng chất',
        'Hỗ trợ cân bằng nước'
      ],
      en: [
        'Gentle detox support',
        'Low calorie, low sugar',
        'Provides vitamins and minerals',
        'Supports hydration balance'
      ]
    },
    allergens: {
      vi: ['Có thể chứa cần tây'],
      en: ['May contain celery']
    }
  },
  {
    id: 'drink-4',
    name: {
      vi: 'Nước ép cam',
      en: 'Orange Juice'
    },
    description: {
      vi: 'Cam tươi ép nguyên chất, không đường',
      en: 'Fresh pure orange juice, no added sugar'
    },
    price: '30.000đ',
    priceValue: 30000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '105 kcal',
    emoji: '🍊',
    image: 'https://i.pinimg.com/736x/db/6b/67/db6b677441ede48e76636fb6e88d8a22.jpg',
    fullDescription: {
      vi: 'Nước ép cam nguyên chất với hương vị chua ngọt hài hòa, giàu vitamin C tự nhiên. Phù hợp dùng buổi sáng hoặc giữa ngày để nạp năng lượng nhanh và tươi mới.',
      en: 'Pure orange juice offers a balanced sweet-tangy taste and is naturally rich in vitamin C. Perfect for mornings or midday refreshment for quick, clean energy.'
    },
    ingredients: {
      vi: [
        'Cam vàng tươi - 250g',
        'Nước lọc - 50ml',
        'Đá viên'
      ],
      en: [
        'Fresh oranges - 250g',
        'Filtered water - 50ml',
        'Ice cubes'
      ]
    },
    nutrition: {
      protein: '2g',
      carbs: '24g',
      fat: '0g',
      fiber: '1g'
    },
    benefits: {
      vi: [
        'Bổ sung vitamin C nhanh',
        'Tăng đề kháng',
        'Hương vị dễ uống',
        'Giải khát hiệu quả'
      ],
      en: [
        'Quick vitamin C boost',
        'Supports immunity',
        'Easy and pleasant flavor',
        'Effective hydration'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'drink-5',
    name: {
      vi: 'Nước ép dứa',
      en: 'Pineapple Juice'
    },
    description: {
      vi: 'Dứa chín ép tươi, thơm ngọt tự nhiên',
      en: 'Fresh ripe pineapple juice with natural sweetness'
    },
    price: '30.000đ',
    priceValue: 30000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '100 kcal',
    emoji: '🍍',
    image: 'https://i.pinimg.com/474x/d6/40/f0/d640f04e1f6b2745b0bbc417271786c6.jpg',
    fullDescription: {
      vi: 'Nước ép dứa tươi có vị chua ngọt dịu, thơm mát và dễ uống. Đây là thức uống giải nhiệt lý tưởng cho những ngày nắng nóng, đồng thời bổ sung enzyme tự nhiên từ dứa.',
      en: 'Fresh pineapple juice has a gentle sweet-tangy flavor, aromatic and easy to drink. It is an ideal cooling beverage for hot days and provides natural enzymes from pineapple.'
    },
    ingredients: {
      vi: [
        'Dứa chín - 220g',
        'Nước lọc - 80ml',
        'Đá viên',
        'Lá bạc hà (tùy chọn)'
      ],
      en: [
        'Ripe pineapple - 220g',
        'Filtered water - 80ml',
        'Ice cubes',
        'Mint leaves (optional)'
      ]
    },
    nutrition: {
      protein: '1g',
      carbs: '23g',
      fat: '0g',
      fiber: '1g'
    },
    benefits: {
      vi: [
        'Bổ sung vitamin C và mangan',
        'Hỗ trợ tiêu hóa nhẹ',
        'Giải nhiệt nhanh',
        'Hương vị nhiệt đới tươi mát'
      ],
      en: [
        'Provides vitamin C and manganese',
        'Supports gentle digestion',
        'Quickly cools the body',
        'Fresh tropical flavor'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'drink-6',
    name: {
      vi: 'Detox Táo - Chanh',
      en: 'Apple Lemon Detox'
    },
    description: {
      vi: 'Táo xanh, chanh vàng, dưa leo, lá bạc hà',
      en: 'Green apple, lemon, cucumber, mint leaves'
    },
    price: '38.000đ',
    priceValue: 38000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '90 kcal',
    emoji: '🍏',
    image: 'https://i.pinimg.com/736x/50/20/71/50207132547bd6027a4ad6b65ca78abd.jpg',
    fullDescription: {
      vi: 'Detox táo chanh có vị thanh sạch, chua nhẹ và mùi thơm bạc hà dễ chịu. Phù hợp cho người muốn thanh lọc nhẹ nhàng, giảm cảm giác ngấy và bổ sung nước cho cơ thể.',
      en: 'Apple lemon detox offers a clean, lightly tangy taste with refreshing mint aroma. Great for gentle detox, reducing heaviness, and improving hydration.'
    },
    ingredients: {
      vi: [
        'Táo xanh - 100g',
        'Nước cốt chanh - 12ml',
        'Dưa leo - 50g',
        'Lá bạc hà tươi',
        'Nước lọc - 180ml',
        'Đá viên'
      ],
      en: [
        'Green apple - 100g',
        'Lemon juice - 12ml',
        'Cucumber - 50g',
        'Fresh mint leaves',
        'Filtered water - 180ml',
        'Ice cubes'
      ]
    },
    nutrition: {
      protein: '0g',
      carbs: '20g',
      fat: '0g',
      fiber: '1g'
    },
    benefits: {
      vi: [
        'Thanh lọc và bù nước',
        'Giảm cảm giác ngấy',
        'Giàu chất chống oxy hóa',
        'Phù hợp ngày nóng'
      ],
      en: [
        'Supports detox and hydration',
        'Reduces heavy/full feeling',
        'Rich in antioxidants',
        'Perfect for hot weather'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: 'drink-7',
    name: {
      vi: 'Detox Dâu tây - Bạc hà',
      en: 'Strawberry Mint Detox'
    },
    description: {
      vi: 'Dâu tây tươi, lá bạc hà, chanh, nước khoáng',
      en: 'Fresh strawberries, mint leaves, lemon, mineral water'
    },
    price: '38.000đ',
    priceValue: 38000,
    category: 'Drinks',
    mealType: 'snack',
    calories: '95 kcal',
    emoji: '🍓',
    image: 'https://i.pinimg.com/736x/18/10/dc/1810dcef229d17cd6a52613aa61afe9a.jpg',
    fullDescription: {
      vi: 'Detox dâu tây bạc hà có hương thơm dịu, vị chua ngọt tự nhiên và hậu vị mát lạnh từ bạc hà. Đây là lựa chọn đồ uống đẹp mắt, nhẹ nhàng và rất hợp với thực đơn eat clean.',
      en: 'Strawberry mint detox has a soft aroma, naturally sweet-tangy flavor, and a cool minty finish. It is a vibrant, light drink that pairs perfectly with an eat-clean menu.'
    },
    ingredients: {
      vi: [
        'Dâu tây tươi - 100g',
        'Lá bạc hà - 8 lá',
        'Nước cốt chanh - 10ml',
        'Nước khoáng - 180ml',
        'Đá viên'
      ],
      en: [
        'Fresh strawberries - 100g',
        'Mint leaves - 8 leaves',
        'Lemon juice - 10ml',
        'Mineral water - 180ml',
        'Ice cubes'
      ]
    },
    nutrition: {
      protein: '1g',
      carbs: '21g',
      fat: '0g',
      fiber: '2g'
    },
    benefits: {
      vi: [
        'Giàu vitamin C và chất chống oxy hóa',
        'Làm mát và thơm miệng',
        'Ít calo, dễ uống',
        'Hỗ trợ bù nước trong ngày'
      ],
      en: [
        'Rich in vitamin C and antioxidants',
        'Cooling and refreshing',
        'Low calorie, easy to drink',
        'Supports daily hydration'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },

  // ============= COMBO TIẾT KIỆM / SAVING COMBOS =============
  {
    id: 'combo-1',
    name: {
      vi: 'Combo tiết kiệm cho ngày năng lượng 1',
      en: 'Energy Day Saving Combo 1'
    },
    description: {
      vi: 'Sữa chua Hy Lạp trái cây hạt + Salad gà + Cơm gạo lứt ức gà nướng + Nước ép dứa',
      en: 'Greek Yogurt with Fruits & Nuts + Chicken Salad + Grilled Chicken Brown Rice Bowl + Pineapple Juice'
    },
    price: '149.000đ',
    priceValue: 149000,
    category: 'Combo',
    mealType: 'combo',
    calories: '915 kcal',
    emoji: '🥗',
    image: 'https://i.pinimg.com/736x/b9/2b/42/b92b424bce2ecb84d8fc54d03fe7aa00.jpg',
    fullDescription: {
      vi: 'Combo 1 dành cho ngày cần nhiều năng lượng với sự kết hợp cân bằng giữa protein, tinh bột tốt và vitamin từ trái cây. Combo gồm 4 món: Sữa chua Hy Lạp trái cây hạt, Salad gà, Cơm gạo lứt ức gà nướng và Nước ép dứa.',
      en: 'Combo 1 is built for high-energy days with a balanced mix of protein, quality carbs, and fruit vitamins. It includes 4 items: Greek Yogurt with Fruits & Nuts, Chicken Salad, Grilled Chicken Brown Rice Bowl, and Pineapple Juice.'
    },
    ingredients: {
      vi: [
        'Sữa chua Hy Lạp trái cây hạt',
        'Salad gà',
        'Cơm gạo lứt ức gà nướng',
        'Nước ép dứa'
      ],
      en: [
        'Greek Yogurt with Fruits & Nuts',
        'Chicken Salad',
        'Grilled Chicken Brown Rice Bowl',
        'Pineapple Juice'
      ]
    },
    nutrition: {
      protein: '56g',
      carbs: '98g',
      fat: '29g',
      fiber: '17g'
    },
    benefits: {
      vi: [
        'Combo no lâu, giàu năng lượng',
        'Protein cao hỗ trợ vận động',
        'Đa dạng vitamin và khoáng chất',
        'Tiết kiệm chi phí hơn gọi lẻ'
      ],
      en: [
        'High-satiety and energy-focused combo',
        'High protein to support activity',
        'Diverse vitamins and minerals',
        'More cost-effective than ordering separately'
      ]
    },
    allergens: {
      vi: ['Sữa', 'Hạt'],
      en: ['Dairy', 'Nuts']
    }
  },
  {
    id: 'combo-2',
    name: {
      vi: 'Combo tiết kiệm cho ngày năng lượng 2',
      en: 'Energy Day Saving Combo 2'
    },
    description: {
      vi: 'Bánh mì nguyên cám bơ Địa Trung Hải + Cơm cá hồi poke bowl + Thạch quế hoa sữa dừa trân châu + Detox Táo & Chanh',
      en: 'Mediterranean Avocado Whole Wheat Toast + Salmon Poke Bowl + Osmanthus Jelly with Coconut Milk & Pearls + Apple Lemon Detox'
    },
    price: '165.000đ',
    priceValue: 165000,
    category: 'Combo',
    mealType: 'combo',
    calories: '890 kcal',
    emoji: '🍱',
    image: 'https://i.pinimg.com/736x/ff/18/77/ff18776ee16fb5ed9bd44ff8be84d2b5.jpg',
    fullDescription: {
      vi: 'Combo 2 là lựa chọn cao cấp và cân bằng dinh dưỡng, kết hợp chất béo tốt, protein chất lượng và món tráng miệng thanh mát. Combo gồm 4 món: Bánh mì nguyên cám bơ Địa Trung Hải, Cơm cá hồi poke bowl, Thạch quế hoa sữa dừa trân châu và Detox Táo & Chanh.',
      en: 'Combo 2 is a premium balanced set featuring healthy fats, quality protein, and a refreshing dessert. It includes 4 items: Mediterranean Avocado Whole Wheat Toast, Salmon Poke Bowl, Osmanthus Jelly with Coconut Milk & Pearls, and Apple Lemon Detox.'
    },
    ingredients: {
      vi: [
        'Bánh mì nguyên cám bơ Địa Trung Hải',
        'Cơm cá hồi poke bowl',
        'Thạch quế hoa sữa dừa trân châu',
        'Detox Táo & Chanh'
      ],
      en: [
        'Mediterranean Avocado Whole Wheat Toast',
        'Salmon Poke Bowl',
        'Osmanthus Jelly with Coconut Milk & Pearls',
        'Apple Lemon Detox'
      ]
    },
    nutrition: {
      protein: '61g',
      carbs: '94g',
      fat: '32g',
      fiber: '15g'
    },
    benefits: {
      vi: [
        'Giàu omega-3 và chất béo lành mạnh',
        'Cân bằng giữa món chính và tráng miệng',
        'Phù hợp ngày làm việc cường độ cao',
        'Tiết kiệm hơn chọn món riêng lẻ'
      ],
      en: [
        'Rich in omega-3 and healthy fats',
        'Balanced between main and dessert',
        'Great for high-performance workdays',
        'More economical than individual orders'
      ]
    },
    allergens: {
      vi: ['Cá', 'Sữa', 'Mè'],
      en: ['Fish', 'Dairy', 'Sesame']
    }
  },
  {
    id: 'combo-3',
    name: {
      vi: 'Combo tiết kiệm cho ngày năng lượng 3',
      en: 'Energy Day Saving Combo 3'
    },
    description: {
      vi: 'Kimbap bò rau củ + Canh đậu phụ rong biển + Thạch mác búp trái cây + Nước ép táo + cần tây',
      en: 'Beef Vegetable Kimbap + Tofu Seaweed Soup + Aiyu Jelly with Tropical Fruits + Apple Celery Juice'
    },
    price: '129.000đ',
    priceValue: 129000,
    category: 'Combo',
    mealType: 'combo',
    calories: '765 kcal',
    emoji: '🍲',
    image: 'https://i.pinimg.com/736x/9d/35/59/9d35598c6aa60a0960d40d8f9064cf3e.jpg',
    fullDescription: {
      vi: 'Combo 3 là lựa chọn nhẹ nhàng, thanh mát và tiết kiệm, phù hợp cho ngày cần ăn gọn nhưng vẫn đủ dưỡng chất. Combo gồm 4 món: Kimbap bò rau củ, Canh đậu phụ rong biển, Thạch mác búp trái cây và Nước ép táo + cần tây.',
      en: 'Combo 3 is a lighter and budget-friendly option, ideal for days when you want a clean but complete meal set. It includes 4 items: Beef Vegetable Kimbap, Tofu Seaweed Soup, Aiyu Jelly with Tropical Fruits, and Apple Celery Juice.'
    },
    ingredients: {
      vi: [
        'Kimbap bò rau củ',
        'Canh đậu phụ rong biển',
        'Thạch mác búp trái cây',
        'Nước ép táo + cần tây'
      ],
      en: [
        'Beef Vegetable Kimbap',
        'Tofu Seaweed Soup',
        'Aiyu Jelly with Tropical Fruits',
        'Apple Celery Juice'
      ]
    },
    nutrition: {
      protein: '30g',
      carbs: '109g',
      fat: '16g',
      fiber: '14g'
    },
    benefits: {
      vi: [
        'Nhẹ bụng, dễ tiêu hóa',
        'Có món canh và món nước cân bằng',
        'Bổ sung chất xơ và vitamin',
        'Chi phí tiết kiệm cho bữa đầy đủ'
      ],
      en: [
        'Light and easy to digest',
        'Balanced with soup and drink',
        'Good source of fiber and vitamins',
        'Affordable complete-meal combo'
      ]
    },
    allergens: {
      vi: ['Đậu nành', 'Mè'],
      en: ['Soy', 'Sesame']
    }
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByMealType(mealType: MealType): Product[] {
  return products.filter(p => p.mealType === mealType)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductName(product: Product, lang: Language): string {
  return product.name[lang]
}

export function getProductDescription(product: Product, lang: Language): string {
  return product.description[lang]
}

export function getProductFullDescription(product: Product, lang: Language): string {
  return product.fullDescription[lang]
}

export function getProductIngredients(product: Product, lang: Language): string[] {
  return product.ingredients[lang]
}

export function getProductBenefits(product: Product, lang: Language): string[] {
  return product.benefits[lang]
}

export function getProductAllergens(product: Product, lang: Language): string[] {
  return product.allergens[lang]
}


