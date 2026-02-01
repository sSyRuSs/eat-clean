import { Language } from '../lib/translations'

export type MealType = 'breakfast' | 'dessert' | 'lunch' | 'snack'

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
  {
    id: '1',
    name: {
      vi: 'Salad gà quinoa',
      en: 'Chicken Quinoa Salad'
    },
    description: {
      vi: 'Ức gà nướng, quinoa, rau xanh tươi, sốt balsamic',
      en: 'Grilled chicken breast, quinoa, fresh greens, balsamic dressing'
    },
    price: '65.000đ',
    priceValue: 65000,
    category: 'Salad',
    mealType: 'lunch',
    calories: '350 kcal',
    emoji: '🥗',
    fullDescription: {
      vi: 'Món salad gà quinoa là sự kết hợp hoàn hảo giữa protein chất lượng cao từ ức gà nướng và carb phức hợp từ quinoa. Được bổ sung thêm các loại rau xanh tươi giòn và sốt balsamic thơm ngon, đây là lựa chọn lý tưởng cho bữa trưa lành mạnh.',
      en: 'Chicken quinoa salad is the perfect combination of high-quality protein from grilled chicken breast and complex carbs from quinoa. Supplemented with fresh crisp greens and delicious balsamic dressing, this is the ideal choice for a healthy lunch.'
    },
    ingredients: {
      vi: [
        'Ức gà nướng không da - 150g',
        'Quinoa hữu cơ - 80g',
        'Rau xà lách xoăn - 50g',
        'Cà chua cherry - 40g',
        'Dưa leo - 30g',
        'Bơ - 1/4 trái',
        'Sốt balsamic tự làm',
        'Hạt điều rang - 10g'
      ],
      en: [
        'Grilled skinless chicken breast - 150g',
        'Organic quinoa - 80g',
        'Curly lettuce - 50g',
        'Cherry tomatoes - 40g',
        'Cucumber - 30g',
        'Avocado - 1/4 piece',
        'Homemade balsamic dressing',
        'Roasted cashews - 10g'
      ]
    },
    nutrition: {
      protein: '35g',
      carbs: '28g',
      fat: '12g',
      fiber: '8g'
    },
    benefits: {
      vi: [
        'Giàu protein giúp xây dựng cơ bắp',
        'Quinoa cung cấp 9 loại amino acid thiết yếu',
        'Nhiều chất xơ hỗ trợ tiêu hóa',
        'Vitamin và khoáng chất từ rau củ tươi',
        'Chất béo lành mạnh từ bơ và hạt điều'
      ],
      en: [
        'High protein for muscle building',
        'Quinoa provides 9 essential amino acids',
        'High fiber supports digestion',
        'Vitamins and minerals from fresh vegetables',
        'Healthy fats from avocado and cashews'
      ]
    },
    allergens: {
      vi: ['Hạt điều', 'Có thể chứa gluten từ quinoa'],
      en: ['Cashews', 'May contain gluten from quinoa']
    }
  },
  {
    id: '2',
    name: {
      vi: 'Cơm gạo lứt cá hồi',
      en: 'Brown Rice Salmon Bowl'
    },
    description: {
      vi: 'Cá hồi nướng, gạo lứt, súp lơ xanh, cà rốt',
      en: 'Grilled salmon, brown rice, broccoli, carrots'
    },
    price: '85.000đ',
    priceValue: 85000,
    category: 'Bowl',
    mealType: 'lunch',
    calories: '420 kcal',
    emoji: '🍱',
    fullDescription: {
      vi: 'Cơm gạo lứt cá hồi là bữa ăn đầy đủ dinh dưỡng với nguồn Omega-3 dồi dào từ cá hồi tươi, carb phức hợp từ gạo lứt và vitamin từ rau củ. Món ăn lý tưởng cho người tập luyện và cần bồi bổ sức khỏe.',
      en: 'Brown rice salmon bowl is a nutritionally complete meal with abundant Omega-3 from fresh salmon, complex carbs from brown rice and vitamins from vegetables. Ideal meal for those who exercise and need health supplements.'
    },
    ingredients: {
      vi: [
        'Cá hồi Nauy tươi - 180g',
        'Gạo lứt hữu cơ - 100g',
        'Súp lơ xanh hấp - 80g',
        'Cà rốt baby - 60g',
        'Măng tây - 50g',
        'Tỏi băm - 5g',
        'Dầu olive nguyên chất',
        'Muối hồng Himalaya'
      ],
      en: [
        'Fresh Norwegian salmon - 180g',
        'Organic brown rice - 100g',
        'Steamed broccoli - 80g',
        'Baby carrots - 60g',
        'Asparagus - 50g',
        'Minced garlic - 5g',
        'Extra virgin olive oil',
        'Himalayan pink salt'
      ]
    },
    nutrition: {
      protein: '42g',
      carbs: '35g',
      fat: '15g',
      fiber: '6g'
    },
    benefits: {
      vi: [
        'Omega-3 tốt cho tim mạch và não bộ',
        'Gạo lứt giàu vitamin B và chất xơ',
        'Protein cao hỗ trợ phục hồi cơ',
        'Chống oxy hóa từ rau củ đa màu sắc',
        'Ít calo, phù hợp giảm cân'
      ],
      en: [
        'Omega-3 good for heart and brain',
        'Brown rice rich in vitamin B and fiber',
        'High protein supports muscle recovery',
        'Antioxidants from colorful vegetables',
        'Low calorie, suitable for weight loss'
      ]
    },
    allergens: {
      vi: ['Cá'],
      en: ['Fish']
    }
  },
  {
    id: '3',
    name: {
      vi: 'Smoothie bowl dâu',
      en: 'Strawberry Smoothie Bowl'
    },
    description: {
      vi: 'Dâu tây, chuối, granola, hạt chia, mật ong',
      en: 'Strawberry, banana, granola, chia seeds, honey'
    },
    price: '55.000đ',
    priceValue: 55000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '280 kcal',
    emoji: '🥣',
    fullDescription: {
      vi: 'Smoothie bowl dâu tây là món ăn sáng hoặc ăn nhẹ hoàn hảo với sự kết hợp tươi mát từ trái cây và độ giòn của granola. Giàu chất chống oxy hóa, vitamin C và năng lượng tự nhiên từ mật ong.',
      en: 'Strawberry smoothie bowl is the perfect breakfast or snack with a refreshing combination of fruits and crunchy granola. Rich in antioxidants, vitamin C and natural energy from honey.'
    },
    ingredients: {
      vi: [
        'Dâu tây tươi đông lạnh - 150g',
        'Chuối - 1 trái',
        'Sữa hạnh nhân không đường - 100ml',
        'Granola yến mạch - 30g',
        'Hạt chia - 15g',
        'Mật ong nguyên chất - 10ml',
        'Bạc hà tươi',
        'Quả việt quất - 20g'
      ],
      en: [
        'Fresh frozen strawberries - 150g',
        'Banana - 1 piece',
        'Unsweetened almond milk - 100ml',
        'Oat granola - 30g',
        'Chia seeds - 15g',
        'Pure honey - 10ml',
        'Fresh mint',
        'Blueberries - 20g'
      ]
    },
    nutrition: {
      protein: '8g',
      carbs: '52g',
      fat: '6g',
      fiber: '12g'
    },
    benefits: {
      vi: [
        'Vitamin C tăng cường miễn dịch',
        'Chất xơ từ hạt chia hỗ trợ tiêu hóa',
        'Năng lượng tự nhiên cho buổi sáng',
        'Chống oxy hóa từ dâu tây',
        'Không chứa đường tinh luyện'
      ],
      en: [
        'Vitamin C boosts immunity',
        'Fiber from chia seeds supports digestion',
        'Natural energy for the morning',
        'Antioxidants from strawberries',
        'No refined sugar'
      ]
    },
    allergens: {
      vi: ['Hạt', 'Yến mạch (gluten)'],
      en: ['Nuts', 'Oats (gluten)']
    }
  },
  {
    id: '4',
    name: {
      vi: 'Wrap gà bơ',
      en: 'Chicken Avocado Wrap'
    },
    description: {
      vi: 'Bánh tortilla lúa mạch, gà xé, bơ, rau củ',
      en: 'Whole wheat tortilla, shredded chicken, avocado, vegetables'
    },
    price: '60.000đ',
    priceValue: 60000,
    category: 'Wrap',
    mealType: 'lunch',
    calories: '380 kcal',
    emoji: '🌯',
    fullDescription: {
      vi: 'Wrap gà bơ là món ăn tiện lợi, dễ mang theo với đầy đủ dinh dưỡng. Bánh tortilla lúa mạch whole grain kết hợp với gà xé mềm, bơ béo ngậy và rau củ tươi giòn tạo nên bữa ăn cân bằng và thơm ngon.',
      en: 'Chicken avocado wrap is a convenient, portable meal with complete nutrition. Whole grain wheat tortilla combined with tender shredded chicken, creamy avocado and fresh crisp vegetables create a balanced and delicious meal.'
    },
    ingredients: {
      vi: [
        'Bánh tortilla lúa mạch whole grain - 1 cái',
        'Ức gà luộc xé - 120g',
        'Bơ chín - 1/2 trái',
        'Cà chua - 40g',
        'Xà lách tím - 30g',
        'Hành tây tím - 20g',
        'Ớt chuông đỏ - 30g',
        'Sốt sữa chua Hy Lạp'
      ],
      en: [
        'Whole grain wheat tortilla - 1 piece',
        'Boiled shredded chicken breast - 120g',
        'Ripe avocado - 1/2 piece',
        'Tomato - 40g',
        'Purple lettuce - 30g',
        'Red onion - 20g',
        'Red bell pepper - 30g',
        'Greek yogurt sauce'
      ]
    },
    nutrition: {
      protein: '32g',
      carbs: '38g',
      fat: '14g',
      fiber: '9g'
    },
    benefits: {
      vi: [
        'Dễ mang theo, tiện lợi',
        'Whole grain tốt cho đường huyết',
        'Chất béo lành mạnh từ bơ',
        'Protein cao từ gà',
        'Nhiều vitamin từ rau củ'
      ],
      en: [
        'Easy to carry, convenient',
        'Whole grain good for blood sugar',
        'Healthy fats from avocado',
        'High protein from chicken',
        'Rich in vitamins from vegetables'
      ]
    },
    allergens: {
      vi: ['Gluten', 'Sữa'],
      en: ['Gluten', 'Dairy']
    }
  },
  {
    id: '5',
    name: {
      vi: 'Poke bowl tuna',
      en: 'Tuna Poke Bowl'
    },
    description: {
      vi: 'Cá ngừ tươi, gạo nhật, edamame, rong biển',
      en: 'Fresh tuna, Japanese rice, edamame, seaweed'
    },
    price: '95.000đ',
    priceValue: 95000,
    category: 'Bowl',
    mealType: 'lunch',
    calories: '450 kcal',
    emoji: '🍲',
    fullDescription: {
      vi: 'Poke bowl tuna mang hương vị Hawaii đích thực với cá ngừ tươi sống chất lượng cao, gạo Nhật bản dẻo thơm và các topping phong phú. Món ăn cao cấp cho những ai yêu thích ẩm thực lành mạnh và tinh tế.',
      en: 'Tuna poke bowl brings authentic Hawaiian flavors with high-quality fresh raw tuna, fragrant sticky Japanese rice and rich toppings. Premium dish for those who love healthy and refined cuisine.'
    },
    ingredients: {
      vi: [
        'Cá ngừ vây vàng sashimi grade - 150g',
        'Gạo Nhật Bản - 100g',
        'Edamame hấp - 50g',
        'Rong biển wakame - 30g',
        'Bơ - 1/4 trái',
        'Dưa leo Nhật - 40g',
        'Gừng muối chua',
        'Sốt ponzu tự làm',
        'Mè rang'
      ],
      en: [
        'Yellowfin tuna sashimi grade - 150g',
        'Japanese rice - 100g',
        'Steamed edamame - 50g',
        'Wakame seaweed - 30g',
        'Avocado - 1/4 piece',
        'Japanese cucumber - 40g',
        'Pickled ginger',
        'Homemade ponzu sauce',
        'Roasted sesame'
      ]
    },
    nutrition: {
      protein: '38g',
      carbs: '48g',
      fat: '12g',
      fiber: '7g'
    },
    benefits: {
      vi: [
        'Protein chất lượng cao từ cá ngừ',
        'Omega-3 dồi dào',
        'Khoáng chất từ rong biển',
        'Vitamin E từ edamame',
        'Ít calo, giàu dinh dưỡng'
      ],
      en: [
        'High-quality protein from tuna',
        'Abundant Omega-3',
        'Minerals from seaweed',
        'Vitamin E from edamame',
        'Low calorie, nutrient-rich'
      ]
    },
    allergens: {
      vi: ['Cá', 'Đậu nành', 'Mè'],
      en: ['Fish', 'Soy', 'Sesame']
    }
  },
  {
    id: '6',
    name: {
      vi: 'Nước ép detox',
      en: 'Detox Green Juice'
    },
    description: {
      vi: 'Cần tây, dưa leo, táo xanh, gừng, chanh',
      en: 'Celery, cucumber, green apple, ginger, lemon'
    },
    price: '45.000đ',
    priceValue: 45000,
    category: 'Beverage',
    mealType: 'snack',
    calories: '120 kcal',
    emoji: '🥤',
    fullDescription: {
      vi: 'Nước ép detox là thức uống thanh lọc cơ thể hoàn hảo với sự kết hợp của rau củ tươi nguyên. Giúp thanh lọc gan, hỗ trợ tiêu hóa và tăng cường năng lượng tự nhiên cho cơ thể.',
      en: 'Detox green juice is the perfect body cleansing drink with a combination of fresh whole vegetables. Helps cleanse the liver, support digestion and boost natural energy for the body.'
    },
    ingredients: {
      vi: [
        'Cần tây tươi - 100g',
        'Dưa leo - 150g',
        'Táo xanh Granny Smith - 1 trái',
        'Gừng tươi - 10g',
        'Chanh tươi - 1/2 trái',
        'Bạc hà - 5g',
        'Nước lọc - 50ml'
      ],
      en: [
        'Fresh celery - 100g',
        'Cucumber - 150g',
        'Granny Smith green apple - 1 piece',
        'Fresh ginger - 10g',
        'Fresh lemon - 1/2 piece',
        'Mint - 5g',
        'Filtered water - 50ml'
      ]
    },
    nutrition: {
      protein: '2g',
      carbs: '28g',
      fat: '0.5g',
      fiber: '6g'
    },
    benefits: {
      vi: [
        'Thanh lọc cơ thể tự nhiên',
        'Tăng cường hệ miễn dịch',
        'Chống viêm từ gừng',
        'Giàu vitamin C',
        'Hỗ trợ tiêu hóa và giảm cân'
      ],
      en: [
        'Natural body detox',
        'Boosts immune system',
        'Anti-inflammatory from ginger',
        'Rich in vitamin C',
        'Supports digestion and weight loss'
      ]
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  // Desserts
  {
    id: '7',
    name: {
      vi: 'Thạch Aiyu (mác búp) trái cây sốt tắc',
      en: 'Aiyu Jelly with Fruit & Kumquat Sauce'
    },
    description: {
      vi: 'Mát lạnh, thanh nhiệt, ít ngọt',
      en: 'Refreshing, cooling, lightly sweet'
    },
    price: '30.000đ',
    priceValue: 30000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '120 kcal',
    emoji: '🍧',
    fullDescription: {
      vi: 'Thạch Aiyu là món tráng miệng truyền thống Đài Loan với vị mát lạnh, thanh nhiệt tự nhiên. Kết hợp với trái cây tươi và sốt tắc chua chua ngọt ngào, đây là lựa chọn hoàn hảo cho những ngày nóng bức.',
      en: 'Aiyu jelly is a traditional Taiwanese dessert with a refreshing, naturally cooling flavor. Combined with fresh fruit and tangy-sweet kumquat sauce, it is the perfect choice for hot days.'
    },
    ingredients: {
      vi: ['Thạch Aiyu', 'Trái cây tươi', 'Sốt tắc', 'Nước chanh'],
      en: ['Aiyu jelly', 'Fresh fruit', 'Kumquat sauce', 'Lemon water']
    },
    nutrition: {
      protein: '1g',
      carbs: '28g',
      fat: '0.5g',
      fiber: '3g'
    },
    benefits: {
      vi: ['Thanh nhiệt mát lạnh', 'Hỗ trợ tiêu hóa', 'Giàu chất xơ', 'Ít calo'],
      en: ['Cooling and refreshing', 'Supports digestion', 'High in fiber', 'Low calorie']
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: '8',
    name: {
      vi: 'Thạch quế hoa trân châu sữa dừa',
      en: 'Osmanthus Jelly with Coconut Pearls'
    },
    description: {
      vi: 'Thơm nhẹ, béo vừa, Á Đông hiện đại',
      en: 'Fragrant, creamy, modern Asian'
    },
    price: '35.000đ',
    priceValue: 35000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '180 kcal',
    emoji: '🧋',
    fullDescription: {
      vi: 'Thạch quế hoa mang hương thơm tinh tế của hoa quế Á Đông, kết hợp với trân châu mềm và sữa dừa béo ngậy. Một món tráng miệng hiện đại mang đậm dấu ấn ẩm thực Á Đông truyền thống.',
      en: 'Osmanthus jelly brings the delicate fragrance of East Asian osmanthus flowers, combined with soft pearls and creamy coconut milk. A modern dessert with a strong mark of traditional East Asian cuisine.'
    },
    ingredients: {
      vi: ['Thạch quế hoa', 'Trân châu nhỏ', 'Sữa dừa', 'Đường mía'],
      en: ['Osmanthus jelly', 'Small pearls', 'Coconut milk', 'Cane sugar']
    },
    nutrition: {
      protein: '2g',
      carbs: '35g',
      fat: '8g',
      fiber: '2g'
    },
    benefits: {
      vi: ['Thơm ngon dễ chịu', 'Béo vừa từ dừa', 'Ít cholesterol', 'Năng lượng tự nhiên'],
      en: ['Pleasant fragrance', 'Moderate creaminess from coconut', 'Low cholesterol', 'Natural energy']
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: '9',
    name: {
      vi: 'Pudding hạt chia',
      en: 'Chia Seed Pudding'
    },
    description: {
      vi: 'Giàu chất xơ, hỗ trợ tiêu hóa',
      en: 'Rich in fiber, supports digestion'
    },
    price: '30.000đ',
    priceValue: 30000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '200 kcal',
    emoji: '🥄',
    fullDescription: {
      vi: 'Pudding hạt chia là món tráng miệng lành mạnh với hạt chia giàu dinh dưỡng, kết hợp sữa dừa hoặc sữa hạnh nhân nhẹ nhàng. Bổ sung trái cây tươi tạo nên một bữa ăn vừa thơm ngon vừa tốt cho sức khỏe.',
      en: 'Chia seed pudding is a healthy dessert with nutrient-rich chia seeds, combined with light coconut or almond milk. Added fresh fruit creates a meal that is both delicious and good for health.'
    },
    ingredients: {
      vi: ['Hạt chia', 'Sữa dừa/sữa hạnh nhân', 'Trái cây tươi', 'Mật ong'],
      en: ['Chia seeds', 'Coconut/almond milk', 'Fresh fruit', 'Honey']
    },
    nutrition: {
      protein: '8g',
      carbs: '32g',
      fat: '10g',
      fiber: '12g'
    },
    benefits: {
      vi: ['Giàu chất xơ hỗ trợ tiêu hóa', 'Omega-3 tự nhiên', 'Dễ tạo', 'Năng lượng bền vững'],
      en: ['High fiber supports digestion', 'Natural omega-3', 'Easy to prepare', 'Sustained energy']
    },
    allergens: {
      vi: ['Hạt'],
      en: ['Nuts']
    }
  },
  {
    id: '10',
    name: {
      vi: 'Chè tiết yến nhựa đào',
      en: 'Peach Gum & Snow Swallow Sweet Soup'
    },
    description: {
      vi: 'Bổ dưỡng, đẹp da',
      en: 'Nourishing, beautifying skin'
    },
    price: '40.000đ',
    priceValue: 40000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '220 kcal',
    emoji: '🍲',
    fullDescription: {
      vi: 'Chè tiết yến nhựa đào là một trong những món chè bổ dưỡng nhất trong ẩm thực Á Đông. Kết hợp ba thành phần quý: nhựa đào, tiết yến và bồ mễ, cùng với táo đỏ tự nhiên, tạo nên một thức uống vừa thơm ngon vừa có tác dụng đẹp da.',
      en: 'Peach gum and snow swallow sweet soup is one of the most nourishing soups in East Asian cuisine. The combination of three precious ingredients: peach gum, snow swallow and bats wing, along with natural red dates, creates a drink that is both delicious and beneficial for skin beauty.'
    },
    ingredients: {
      vi: ['Nhựa đào', 'Tiết yến', 'Bồ mễ', 'Táo đỏ', 'Đường mía'],
      en: ['Peach gum', 'Snow swallow', 'White fungus', 'Red dates', 'Cane sugar']
    },
    nutrition: {
      protein: '4g',
      carbs: '48g',
      fat: '2g',
      fiber: '5g'
    },
    benefits: {
      vi: ['Bổ dưỡng cơ thể', 'Đẹp da tự nhiên', 'Tốt cho phổi', 'Nâng cao sức khỏe'],
      en: ['Nourishes the body', 'Naturally beautifies skin', 'Good for lungs', 'Improves health']
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: '11',
    name: {
      vi: 'Thạch la hán quả sữa dừa',
      en: 'Monk Fruit Herbal Jelly with Coconut Milk'
    },
    description: {
      vi: 'Thanh lọc, ngọt tự nhiên',
      en: 'Cleansing, naturally sweet'
    },
    price: '35.000đ',
    priceValue: 35000,
    category: 'Dessert',
    mealType: 'dessert',
    calories: '170 kcal',
    emoji: '🍯',
    fullDescription: {
      vi: 'Thạch la hán quả với sữa dừa là một thức uống thanh lọc tuyệt vời, kết hợp giữa ngọt tự nhiên của la hán quả và tính mát lạnh của các nguyên liệu herbal. Không cần đường tinh luyện, tốt cho sức khỏe và làn da.',
      en: 'Monk fruit jelly with coconut milk is an excellent cleansing drink, combining the natural sweetness of monk fruit and the cooling properties of herbal ingredients. No refined sugar needed, good for health and skin.'
    },
    ingredients: {
      vi: ['La hán quả', 'Sung sấy', 'Dừa biển', 'Hoa cúc', 'Táo mật', 'Sữa dừa'],
      en: ['Monk fruit', 'Dried figs', 'Seaweed', 'Chrysanthemum', 'Chinese dates', 'Coconut milk']
    },
    nutrition: {
      protein: '2g',
      carbs: '38g',
      fat: '6g',
      fiber: '4g'
    },
    benefits: {
      vi: ['Ngọt tự nhiên không cần đường', 'Thanh lọc cơ thể', 'Tốt cho mắt', 'An toàn cho tiểu đường'],
      en: ['Naturally sweet without sugar', 'Cleanses the body', 'Good for eyes', 'Safe for diabetics']
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  // Lunch
  {
    id: '12',
    name: {
      vi: 'Bún gạo lứt bò',
      en: 'Brown Rice Vermicelli Beef Bowl'
    },
    description: {
      vi: 'Nhẹ – tươi – không ngán',
      en: 'Light, fresh, not heavy'
    },
    price: '55.000đ',
    priceValue: 55000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '480 kcal',
    emoji: '🍜',
    fullDescription: {
      vi: 'Bún gạo lứt bò là một bữa trưa hoàn hảo với bún gạo lứt nhẹ nhàng kết hợp thịt bò nạc được nướng tuyệt vời. Kèm theo đó là rau xanh tươi và các loại rau sống, tạo nên một bữa ăn vừa nhẹ vừa thanh mát, không gây cảm giác nặng.',
      en: 'Brown rice vermicelli beef bowl is a perfect lunch with light brown rice vermicelli combined with perfectly grilled lean beef. Accompanied by fresh greens and raw vegetables, it creates a light and refreshing meal that does not cause heaviness.'
    },
    ingredients: {
      vi: ['Bún gạo lứt', 'Bò nạc nướng', 'Xà lách', 'Rau sống', 'Sốt chấm'],
      en: ['Brown rice vermicelli', 'Grilled lean beef', 'Lettuce', 'Fresh herbs', 'Dipping sauce']
    },
    nutrition: {
      protein: '38g',
      carbs: '52g',
      fat: '12g',
      fiber: '8g'
    },
    benefits: {
      vi: ['Protein cao từ bò', 'Carb từ gạo lứt lành mạnh', 'Vitamin từ rau sống', 'Dễ tiêu hóa', 'Cân bằng dinh dưỡng'],
      en: ['High protein from beef', 'Healthy carbs from brown rice', 'Vitamins from fresh herbs', 'Easy to digest', 'Balanced nutrition']
    },
    allergens: {
      vi: [],
      en: []
    }
  },
  {
    id: '13',
    name: {
      vi: 'Cơm gạo lứt chả ức gà',
      en: 'Brown Rice Chicken Patties Salad'
    },
    description: {
      vi: 'Đạm cao, cân bằng',
      en: 'High protein, balanced'
    },
    price: '60.000đ',
    priceValue: 60000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '500 kcal',
    emoji: '🍚',
    fullDescription: {
      vi: 'Cơm gạo lứt chả ức gà là một bữa ăn trưa có lượng protein rất cao, với chả ức gà tươi kết hợp cơm gạo lứt bổ dưỡng. Thêm vào đó là bơ, tôm và các loại rau, tạo nên một bữa ăn cân bằng lý tưởng cho những ai tập luyện.',
      en: 'Brown rice chicken patties salad is a lunch meal with very high protein, with fresh chicken patties combined with nutritious brown rice. Add avocado, shrimp and vegetables, creating an ideally balanced meal for those who exercise.'
    },
    ingredients: {
      vi: ['Gạo lứt', 'Chả ức gà', 'Bơ', 'Tôm tươi', 'Rau sống'],
      en: ['Brown rice', 'Chicken patties', 'Avocado', 'Fresh shrimp', 'Fresh vegetables']
    },
    nutrition: {
      protein: '45g',
      carbs: '48g',
      fat: '14g',
      fiber: '7g'
    },
    benefits: {
      vi: ['Protein rất cao', 'Chất béo lành mạnh', 'Carb phức hợp', 'Phục hồi cơ bắp', 'Cân bằng dinh dưỡng'],
      en: ['Very high protein', 'Healthy fats', 'Complex carbs', 'Muscle recovery', 'Balanced nutrition']
    },
    allergens: {
      vi: ['Tôm'],
      en: ['Shrimp']
    }
  },
  {
    id: '14',
    name: {
      vi: 'Cơm cá hồi sốt mè nhạt',
      en: 'Salmon Rice Bowl'
    },
    description: {
      vi: 'Healthy everyday meal',
      en: 'Healthy everyday meal'
    },
    price: '65.000đ',
    priceValue: 65000,
    category: 'Lunch',
    mealType: 'lunch',
    calories: '520 kcal',
    emoji: '🍱',
    fullDescription: {
      vi: 'Cơm cá hồi sốt mè nhạt là một bữa ăn trưa lành mạnh hàng ngày, với cá hồi tươi đầy đủ Omega-3 kết hợp cơm trắng. Kèm theo là đậu, cà chua bi tươi và sốt mè nhạt thơm ngon, tạo nên một bữa ăn cân bằng và bổ dưỡng.',
      en: 'Salmon rice bowl with light sesame sauce is a healthy everyday meal, with fresh salmon full of Omega-3 combined with white rice. Accompanied by beans, fresh cherry tomatoes and delicious light sesame sauce, it creates a balanced and nutritious meal.'
    },
    ingredients: {
      vi: ['Cơm', 'Cá hồi tươi', 'Đậu', 'Cà chua bi', 'Sốt mè nhạt'],
      en: ['Rice', 'Fresh salmon', 'Beans', 'Cherry tomatoes', 'Light sesame sauce']
    },
    nutrition: {
      protein: '42g',
      carbs: '50g',
      fat: '16g',
      fiber: '6g'
    },
    benefits: {
      vi: ['Omega-3 từ cá hồi', 'Protein cao', 'Vitamin và khoáng chất', 'Tốt cho tim mạch', 'Nuôi dưỡng cơ thể'],
      en: ['Omega-3 from salmon', 'High protein', 'Vitamins and minerals', 'Good for heart', 'Nourishes the body']
    },
    allergens: {
      vi: ['Cá', 'Mè'],
      en: ['Fish', 'Sesame']
    }
  },
  // Breakfast
  {
    id: '15',
    name: {
      vi: 'Bánh mì nguyên cám bơ Địa Trung Hải',
      en: 'Mediterranean Avocado Toast'
    },
    description: {
      vi: 'Bánh mì nguyên cám phủ bơ nghiền, cà chua bi và olive',
      en: 'Whole wheat bread topped with mashed avocado, cherry tomatoes and olives'
    },
    price: '45.000đ',
    priceValue: 45000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '350 kcal',
    emoji: '🥪',
    fullDescription: {
      vi: 'Bánh mì nguyên cám bơ theo phong cách Địa Trung Hải là bữa sáng lý tưởng với bánh mì nguyên cám giàu chất xơ, phủ lên đó là bơ mềm, cà chua bi tươi và olive thơm ngon. Một bữa sáng vừa đơn giản vừa đầy dinh dưỡng.',
      en: 'Mediterranean-style avocado whole wheat bread is an ideal breakfast with whole grain bread rich in fiber, topped with soft avocado, fresh cherry tomatoes and fragrant olives. A breakfast that is both simple and full of nutrition.'
    },
    ingredients: {
      vi: ['Bánh mì nguyên cám', 'Bơ chín', 'Cà chua bi', 'Olive', 'Cà cà chua'],
      en: ['Whole wheat bread', 'Ripe avocado', 'Cherry tomatoes', 'Olives', 'Tomato paste']
    },
    nutrition: {
      protein: '12g',
      carbs: '42g',
      fat: '14g',
      fiber: '8g'
    },
    benefits: {
      vi: ['Whole grain tốt cho tiêu hóa', 'Chất béo lành mạnh từ bơ', 'Vitamin C từ cà chua', 'Năng lượng bền vững', 'Dễ chuẩn bị'],
      en: ['Whole grain good for digestion', 'Healthy fats from avocado', 'Vitamin C from tomatoes', 'Sustained energy', 'Easy to prepare']
    },
    allergens: {
      vi: ['Gluten'],
      en: ['Gluten']
    }
  },
  {
    id: '16',
    name: {
      vi: 'Sữa chua Hy Lạp hạt dinh dưỡng',
      en: 'Greek Yogurt Nut Bowl'
    },
    description: {
      vi: 'Sữa chua Hy Lạp kết hợp hạt và mật ong tự nhiên',
      en: 'Greek yogurt combined with nuts and natural honey'
    },
    price: '40.000đ',
    priceValue: 40000,
    category: 'Breakfast',
    mealType: 'breakfast',
    calories: '280 kcal',
    emoji: '🥛',
    fullDescription: {
      vi: 'Sữa chua Hy Lạp hạt dinh dưỡng là bữa sáng hoàn hảo với sữa chua Hy Lạp mà bổ dưỡng, kết hợp với hạnh nhân, óc chó và mật ong tự nhiên. Một bữa sáng giàu protein, vitamin và năng lượng tự nhiên.',
      en: 'Greek yogurt nut bowl is a perfect breakfast with nutritious Greek yogurt, combined with almonds, walnuts and natural honey. A breakfast rich in protein, vitamins and natural energy.'
    },
    ingredients: {
      vi: ['Sữa chua Hy Lạp', 'Hạnh nhân', 'Óc chó', 'Mật ong', 'Trái cây tươi'],
      en: ['Greek yogurt', 'Almonds', 'Walnuts', 'Honey', 'Fresh fruit']
    },
    nutrition: {
      protein: '15g',
      carbs: '35g',
      fat: '10g',
      fiber: '6g'
    },
    benefits: {
      vi: ['Protein cao từ sữa chua', 'Chất béo lành mạnh từ hạt', 'Probiotics tốt cho đường ruột', 'Calcium cho xương chắc khỏe', 'Năng lượng bền vững'],
      en: ['High protein from yogurt', 'Healthy fats from nuts', 'Probiotics good for gut', 'Calcium for strong bones', 'Sustained energy']
    },
    allergens: {
      vi: ['Hạt', 'Sữa'],
      en: ['Nuts', 'Dairy']
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
