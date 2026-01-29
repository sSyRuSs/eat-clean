import { Language } from '../lib/translations'

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
      vi: 'Cá hồi nướng, gạo lứt, súp lơ xanh, cà rót',
      en: 'Grilled salmon, brown rice, broccoli, carrots'
    },
    price: '85.000đ',
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
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
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
