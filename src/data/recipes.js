export const recipes = [
  {
    id: 1,
    name: 'Chicken Noodle Soup',
    category: 'chicken', 
    difficulty: 'easy', 
    cookTime: 35, 
    totalTime: 45,
    servings: '9 cups', 
    url: 'https://www.feastingathome.com/chicken-noodle-soup/', 
    imageUrl: 'https://www.feastingathome.com/wp-content/uploads/2023/10/Chicken-Noodle-Soup-11.jpg',
    ingredients: [
      { name: 'olive oil', quantity: '3', units: 'tablespoons', textDisplay: '3 tablespoons olive oil' },
      { name: 'onion', quantity: '1', textDisplay: '1 onion, chopped' },
      { name: 'leek', quantity: '1', textDisplay: '1 leek, cleaned and sliced in half moons' },
      { name: 'celery', quantity: '2', textDisplay: '2 ribs of celery, chopped' },
      { name: 'carrots', quantity: '2', textDisplay: '2 carrots, diced' },
      { name: 'garlic cloves', quantity: '5', textDisplay: '5 garlic cloves, minced' },
      { name: 'bay leaves', quantity: '2', textDisplay: '2 bay leaves' },
      { name: 'ground coriander', quantity: '2', units: 'teaspoons', textDisplay: '2 teaspoons ground coriander' },
      { name: 'dried thyme', quantity: '2', units: 'teaspoons', textDisplay: '2 teaspoons dried thyme (or 2 tablespons of fresh thyme' },
      { name: 'chicken thighs', quantity: '2', units: 'pounds', textDisplay: '2 pounds bone-in chicken thighs (see notes)' },
      { name: 'chicken broth', quantity: '8', units: 'cups', textDisplay: '8 cups chicken broth, low sodium' },
      { name: 'salt', quantity: '2', units: 'teaspoons', textDisplay: '2 teaspoons salt (this will depend greathly on the broth you use-adjust to taste)' },
      { name: 'black pepper', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon black pepper' },
      { name: 'egg noodles', quantity: '4', units: 'ounces', textDisplay: '4 ounces of egg noodles, uncooked' },
      { name: 'fresh parsley', quantity: '1/4', units: 'cup', textDisplay: '1/4 cup fresh parsley, chopped' },
      { name: 'lemon juice', quantity: '3', units: 'tablespoons', textDisplay: '2-3 tablespoons lemon juice, more to taste' }      
    ],
    steps: [
      {
        number: 1,
        directions: 'In a large stock pot saute onions and leeks over medium-high heat for 5 minutes.'
      },
      {
        number: 2,
        directions: 'Add celery, carrots and garlic saute another 3 minutes or so.'
      },
      {
        number: 3,
        directions: 'Add chicken broth, bay leaves, coriander and thyme.  Taste the broth, season with more salt and pepper if needed, keeping in mind that the chicken is going to add richness and the lemon will give a balance at the end.  Add in the whole pieces of chicken (see notes for using bone-less or pre-cooked).  Bring to a boil and turn down to a simmer for 30 minutes.'
      },
      {
        number: 4,
        directions: 'Turn the soup to low, while you remove the chicken thighs from the hot broth and shred into bite-size pieces.'
      },
      {
        number: 5,
        directions: 'Turn up the heat and once the soup is simmering, andd the chicken back into the pot.  Next, add the egg noodles to the soup.  Cook them for half of the time recommended on the noodle package.  Turn off the heat, the noodles will continue to soften in the soup.  Cooking less keeps them from getting mushy and falling apart.'
      },
      {
        number: 6,
        directions: 'Add parsley, lemon juice and adjust salt and pepper to taste. (See notes for additional flavorings).'
      },
    ],
    notes: [
      {
        title: 'Bone-in chicken thighs',
        note: 'Skins on or off either way!, Skins have wonderful collagen but make the soup a little more oily.  Thighs create a richer more flavorful broth and chicken thighs become tender and soft as they cook, breasts tend to stay firm in the soup.  That said, you can use boneless, skinless chicken breasts or thighs-totally up to you! Or use up left-over cooked chicken.'
      },
      {
        title: 'Tip',
        note: 'To add even more flavor, sear and brown the chicken skin before adding to the soup.  You can do this in a separate skillet at the same time, or do this in the soup pot first, then set aside.'
      },
      {
        title: 'For bone-less or pre-cooked chicken',
        note: 'Simmer 15 minutes rather than 30 minutes.'
      },
      {
        title: 'Additional flavorings',
        note: 'To add depth to the soup, you can include ingredients like a splash of fish sauce, a teaspoon of dijon mustard or a teaspoon of white miso paste.'
      },
      {
        title: 'To make ahead or freeze',
        note: 'Leave the noodles out and allow the soup to cool completely before transferring it to airtight containers.  Reheat and cook noodles in the broth just before serving.'
      },
      {
        title: 'To reheat leftovers',
        note: 'Add a little chicken broth to the soup to account for the broth the noodles soak up.'
      },
    ],
    nutrition: [
      { name: 'Serving Size', information: '1 1/2 cups' },
      { name: 'Calories', information: '263' },
      { name: 'Sugar', information: '9.5 g' },
      { name: 'Sodium', information: '735.3 mg' },
      { name: 'Fat', information: '11.8 g' },
      { name: 'Saturated Fat', information: '2.2 g' },
      { name: 'Carbohydrates', information: '27.4 g' },
      { name: 'Fiber', information: '3 g' },
      { name: 'Protein', information: '12.4 g' },
      { name: 'Cholesterol', information: '21.7 mg' },
    ]
  },
  {
    id: 2,
    name: 'Tarragon Chicken with Asparagus, Lemon and Leeks',
    category: 'chicken', 
    difficulty: 'easy', 
    cookTime: 20, 
    totalTime: 35,
    servings: '4', 
    url: 'https://www.feastingathome.com/tarragon-chicken-with-asparagus-lemon-leeks/', 
    imageUrl: 'https://www.feastingathome.com/wp-content/uploads/2018/05/tarragon-chicken-100-8.jpg',
    ingredients: [
      { name: 'lemons', quantity: '2', textDisplay: '2 lemons' },
      { name: 'olive oil', quantity: '1/4', units: 'cup', textDisplay: '1/4 cup olive oil' },
      { name: 'garlic cloves', quantity: '6', textDisplay: '4-6 garlic cloves, finely minced' },
      { name: 'salt', quantity: '2', units: 'teaspoons', textDisplay: '2 teaspoons salt' },
      { name: 'black pepper', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon black pepper' },
      { name: 'fresh taragon', quantity: '1', units: 'ounce', textDisplay: '1-ounce package of fresh tarragon leaves, rough chopped, about 1/4-1/3 cup' },
      { name: 'asparagus', quantity: '1', unit: 'bunch', textDisplay: '1 extra-large bunch asparagus, trimmed (about 1 1/2 pounds)' },
      { name: 'leeks', quantity: '2', textDisplay: '1-2 large leeks, sliced into 1/2 thick rounds' },
      { name: 'chicken breasts', quantity: '5', textDisplay: '4-5 medium chicken breasts (boneless, skinless)' },
      { name: 'parchment paper', quantity: '1', units: 'sheet', textDisplay: '1 sheet parchment paper'}
    ],
    steps: [
      {
        number: 1,
        directions: 'Preheat oven to 425F.'
      },
      {
        number: 2,
        directions: `In a small bowl, make the marinade.  Place the zest of one lemon and it's juice in a small bowl.  Add oil, garlic, salt and pepper.  Mix well until salt dissolves.  Add 1/2 of the fresh tarragon, saving the rest for garnish.`
      },
      {
        number: 3,
        directions: 'Add asparagus and leeks to a bowl.  Toss with some marinated to coat and place on a parchment-lined sheet pan.'
      },
      {
        number: 4,
        directions: 'Add chicken to bowl and toss with remaining marinade and nestle chicken amongst the asparagus and leeks.'
      },
      {
        number: 5,
        directions: 'Zest the second lemon over the whole sheet pan.  Slice the lemons into rounds, layering them over the asparagus.'
      },
      {
        number: 6,
        directions: 'Bake 15-20 minutes until internal temperature of the chicken reads 160-165F.'
      },
      {
        number: 7,
        directions: 'Remove from oven, toss to mix with all the juices, sprinkle with remaining tarragon, serve.'
      },
    ],
    nutrition: [
      { name: 'Serving Size', information: '1/4 of total' },
      { name: 'Calories', information: '326' },
      { name: 'Sugar', information: '2.7 g' },
      { name: 'Sodium', information: '939.5 mg' },
      { name: 'Fat', information: '17.9 g' },
      { name: 'Saturated Fat', information: '2.9 g' },
      { name: 'Carbohydrates', information: '7.5 g' },
      { name: 'Fiber', information: '3.4 g' },
      { name: 'Protein', information: '35.2 g' },
      { name: 'Cholesterol', information: '103.4 mg' },
    ]
  },
  {
    id: 3,
    name: 'Instant Pot Vegetable Korma',
    category: 'vegetable', 
    difficulty: 'medium', 
    cookTime: 25, 
    totalTime: 40,
    servings: '6', 
    url: 'https://myheartbeets.com/instant-pot-vegetable-korma/#wprm-recipe-container-11137', 
    imageUrl: 'https://myheartbeets.com/wp-content/uploads/2018/03/instant-pot-navratan-korma.jpg',
    ingredients: [
      { name: 'onion', quantity: '1', textDisplay: '1 onion roughly chopped' },
      { name: 'garlic cloves', quantity: '4', textDisplay: '4 cloves garlic roughly chopped' },
      { name: 'ginger', quantity: '2', units: 'inch', textDisplay: '2 inch ginger roughly chopped' },
      { name: 'tomato', quantity: '1', textDisplay: '1 tomato chopped' },
      { name: 'green chili pepper', quantity: '1/2', textDisplay: '1/2 serrano or green chili pepper' },
      { name: 'cashews', quantity: '3/4', units: 'cup', textDisplay: '3/4 cup cashew, divided' },
      { name: 'heavy cream or full-fat coconut milk', quantity: '1/4', units: 'cup', textDisplay: '1/4 cup heavy cream of full-fat coconut milk' },
      { name: 'butter or ghee', quantity: '3', units: 'tablespoons', textDisplay: '3 tablespoons ghee or butter' },
      { name: 'golden raisins', quantity: '1/4', units: 'cup', textDisplay: '1/4 cup golden raisins' },
      { name: 'cumin seeds', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon cumin seeds' },
      { name: 'paprika', quantity: '2', units: 'teaspoons', textDisplay: '2 teaspoons paprika' },
      { name: 'salt', quantity: '1', units: 'teaspoon', textDisplay: '1 teaspoon salt' },
      { name: 'ground coriander', quantity: '1', units: 'teaspoon', textDisplay: '1 teaspoon coriander powder' },
      { name: 'ground tumeric', quantity: '1', units: 'teaspoon', textDisplay: '1 teaspoon tumeric powder' },
      { name: 'garam masala', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon garam masala' },
      { name: 'cayenne pepper', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon cayenne, adjust to taste' },
      { name: 'ground cardamom', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon ground cardamom' },
      { name: 'potato', quantity: '2', units: 'cups', textDisplay: '2 cups chopped potato, 1-inch cubes' },
      { name: 'mixed vegetables', quantity: '5', units: 'cups', textDisplay: '5 cups chopped vegetables (peas, carrots, green beans, bell pepper, broccoli)' },
      { name: 'cilantro', quantity: '1', units: 'bunch', textDisplay: 'cilantro, garnish' },
      { name: 'white rice', quantity: '6', units: 'cups', textDisplay: '6 cups cooked white rice' },
    ],
    steps: [
      {
        number: 1,
        directions: 'Add onion, garlic, ginger, tomato and green chili pepper to blender or food processor.  Puree until smooth, set aside.'
      },
      {
        number: 2,
        directions: `Add 1 cup water, 1/2 cup cashews and heavy cream to blender or food processor.  Puree until smooth, set aside.`
      },
      {
        number: 3,
        directions: 'Press saute on the instant pot, add ghee, 1/4 cup cashews and golden raisins to the pot.  Stir-fry until the cashews turn golden. Remove cashews and raisins from pot, set aside.'
      },
      {
        number: 4,
        directions: 'Add cumin seeds to the pot.  Once they begin to brown, add the onion and tomato mixture from step 1.  Stir fry for 7-8 minutes.  Add all of the remaining spices along with the potatoes and mix well.'
      },
      {
        number: 5,
        directions: 'Add 1 cup water, cook on high pressure for 5 minutes.  Quick release pressure.'
      },
      {
        number: 6,
        directions: 'Add remaining chopped vegetables.  Cook on high for 2 minutes.  Quick release pressure.'
      },
      {
        number: 7,
        directions: 'Stir in cashew sauce from step 2, garnish with cilantro, serve with white rice.'
      },
    ],
  },
  {
    id: 4,
    name: 'Instant Pot Egg Biryani',
    category: 'egg', 
    difficulty: 'medium', 
    cookTime: 30, 
    totalTime: 15,
    servings: '4', 
    url: 'https://myheartbeets.com/instant-pot-egg-biryani/#wprm-recipe-container-11145', 
    imageUrl: 'https://myheartbeets.com/wp-content/uploads/2018/03/instant-pot-egg-biryani.jpg',
    ingredients: [
      { name: 'basamati rice', quantity: '1', units: 'cup', textDisplay: '1 cup basamati rice, soaked 15 minutes' },
      { name: 'oil or ghee', quantity: '4', units: 'tablespoons', textDisplay: '2 tablespoons oil or ghee' },
      { name: 'cardamom pods', quantity: '5', textDisplay: '5 cardamom pods' },
      { name: 'cloves', quantity: '4', textDisplay: '4 whole cloves' },
      { name: 'bay leaves', quantity: '2', textDisplay: '2 bay leaves' },
      { name: 'cinnamon stick', quantity: '1/2', textDisplay: '1/2 cinnamon stick' },
      { name: 'cumin seeds', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon cumin seeds' },
      { name: 'fennel seeds', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon fennel seeds' },
      { name: 'onion', quantity: '1', textDisplay: '1 onion, thinly sliced' },
      { name: 'garlic cloves', quantity: '4', textDisplay: '2 teaspoons minced garlic' },
      { name: 'ginger', quantity: '1', units: 'inch', textDisplay: '1 teaspoon minced ginger' },
      { name: 'salt', quantity: '1 1/2', units: 'teaspoons', textDisplay: '1 1/2 teaspoon salt' },
      { name: 'ground coriander', quantity: '1', units: 'teaspoon', textDisplay: '1 teaspoon coriander powder' },
      { name: 'paprika', quantity: '1', units: 'teaspoon', textDisplay: '1 teaspoon paprika' },
      { name: 'garam masala', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon garam masala' },
      { name: 'black pepper', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon black pepper' },
      { name: 'cayenne pepper', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon cayenne, adjust to taste' },
      { name: 'ground cumin', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon gound cumin' },
      { name: 'tumeric', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon tumeric' },
      { name: 'tomato', quantity: '1', textDisplay: '1 tomato diced' },
      { name: 'eggs', quantity: '6', textDisplay: '6 eggs' },
      { name: 'fresh cilantro', quantity: '1', units: 'bunch', textDisplay: 'Cilanto leaves, chopped' },
      { name: 'fresh mint', quantity: '1', units: 'bunch', textDisplay: 'Mint leaves, chopped' },
      { name: 'cashews', quantity: '1/3', units: 'cup', textDisplay: '1/3 cup cashew halves, optional' },
      { name: 'golden raisins', quantity: '2', units: 'tablespoons', textDisplay: '2 tablespoons golden raisins, optional' },
    ],
    steps: [
      {
        number: 1,
        directions: 'Soak the basamati rice in cold water for 15 minutes.  Drain, rinse, set aside.'
      },
      {
        number: 2,
        directions: `Meanwhile, turn saute on the instant pot and add 2 tablespoons of oil or ghee.  Once hot, add the whole spices.  Once the cumin seeds brown, add onion and cook for 5-7 minutes or until onion browns.`
      },
      {
        number: 3,
        directions: 'Add the garlic, ginger, ground spices, stir, add tomato, cook for 2-3 minutes.'
      },
      {
        number: 4,
        directions: 'Add rice and 1 cup water to the pot, then place a trivet or steamer basket into the pot on top of the rice.  Place eggs on top.'
      },
      {
        number: 5,
        directions: 'Cook on high for 10 minutes, quick release the pressure afterwards.'
      },
      {
        number: 6,
        directions: 'Remove steamer basket and eggs.  Place eggs into a bowl of ice-cold water.  Peel when cool enough.  Optionally quickly stir-fry eggs in pinch of paprika, cayenne, tumeric, salt and oil to give more flavor'
      },
      {
        number: 7,
        directions: 'Add eggs back into rice and mix well. '
      },
      {
        number: 8,
        directions: 'Garnish with mint and cilantro.  Optionally stir-fry 1/3 cup halved cashews and 2 tablespoons golden raisins in 2 tablespoons melted ghee and use for garnish.'
      },
      {
        number: 9,
        directions: 'Stir in cashew sauce from step 2, garnish with cilantro, serve with white rice.'
      },
    ],
  },
  {
    id: 5,
    name: 'Baked Cod with Asparagus',
    category: 'fish', 
    difficulty: 'easy', 
    cookTime: 25, 
    totalTime: 40,
    servings: '4', 
    url: 'https://www.feastingathome.com/baked-cod-with-asparagus-fennel-leeks/', 
    imageUrl: 'https://www.feastingathome.com/wp-content/uploads/2019/04/Baked-Cod-with-Asparagus-200-3.jpg',
    ingredients: [
      { name: 'cod', quantity: '1 1/2', units: 'pounds', textDisplay: '1 - 1 1/2 lbs cod - or sub black cod, halibut, sea bass' },
      { name: 'olive oil', quantity: '3', units: 'tablespoon', textDisplay: '3 tablespoon olive oil, divided' },
      { name: 'kosher salt', quantity: '1', units: 'teaspoon', textDisplay: '1 teaspoon kosher salt' },
      { name: 'black pepper', quantity: '1/2', units: 'teaspoon', textDisplay: '1/2 teaspoon black pepper' },
      { name: 'fresh thyme', quantity: '3', units: 'teaspoons', textDisplay: '3 teaspoons fresh thyme, divided' },
      { name: 'lemon', quantity: '1', textDisplay: 'zest from one lemon' },
      { name: 'fennel bulb', quantity: '1', textDisplay: '1 large fennel bulb, cored and thinly sliced (or sub celery and more asparugus)' },
      { name: 'leek', quantity: '1', textDisplay: '1 large leek, white and light green parts, thinly sliced into half moons' },
      { name: 'garlic cloves', quantity: '4', textDisplay: '4 cloves garlic, roughly chopped' },
      { name: 'preserved lemon', quantity: '2', unit: 'tablespoons', textDisplay: '2 tablespoons finely chopped preserved lemon (or sub zest from another lemon)' },
      { name: 'veggie broth', quantity: '1/2', unit: 'cup', textDisplay: '1/2 cup chicken or veggie broth or stock, more as needed' },
      { name: 'white wine', quantity: '1/2', unit: 'cup', textDisplay: '1/2 cup white wine (or sub more broth and a squeeze of lemon' },
      { name: 'asparagus', quantity: '1', unit: 'bunch', textDisplay: '1 large bunch asparagus, cut into 1-2 inch pieces, tough ends removed' },
    ],
    steps: [
      {
        number: 1,
        directions: 'Preheat oven to 400F.'
      },
      {
        number: 2,
        directions: `Cut cod into 4 pieces, pat dry.  Place into bowl, drizzle with 1 tablespoon of olive oil, sprinkle with salt, pepper, thyme and zest.  Toss to coat, set aside.`
      },
      {
        number: 3,
        directions: 'Heat 2 tablespoons olive oil over medium heat in an oven-proof skillet.  Add fennel and saute 5-7 minutes.'
      },
      {
        number: 4,
        directions: 'Add leeks and garlic, continue cooking, stirring until leeks are golden tender.'
      },
      {
        number: 5,
        directions: 'Add lemon zest, fresh thyme, broth and white wine. Stir in salt and pepper.  Simmer on medium-low until liquid is reduced by half.  About 5 minutes.'
      },
      {
        number: 6,
        directions: 'Add the asparagus, stir, cook for 2 more minutes.'
      },
      {
        number: 7,
        directions: 'Nestle fish into the asparugus.  Bake 10-15 minutes, depending on thickness.'
      },
    ],
  },
  {
    id: 6,
    name: 'Instant Pot Minestrone Soup',
    category: 'vegetable', 
    difficulty: 'easy', 
    cookTime: 15, 
    totalTime: 25,
    servings: '6', 
    url: 'https://www.feastingathome.com/instant-pot-minestrone/', 
    imageUrl: 'https://www.feastingathome.com/wp-content/uploads/2018/01/Instant-Pot-Minestrone-118.jpg',
    ingredients: [
      { name: 'olive oil', quantity: '1', units: 'tablespoon', textDisplay: '1 tablespoon olive oil' },
      { name: 'onion', quantity: '1', textDisplay: '1 onion, diced' },
      { name: 'garlic cloves', quantity: '6', textDisplay: '4-6 garlic cloves, chopped roughly' },
      { name: 'fennel bulb', quantity: '1', textDisplay: '1 large fennel bulb, cored, diced thinly (or sub 2 cups chopped celery)' },
      { name: 'carrots', quantity: '1', unit: 'bunch', textDisplay: '2 cups chopped carrots (1/2 inch think)' },
      { name: 'white beans', quantity: '2', unit: 'cans', textDisplay: '2 cans white beans, drained' },
      { name: 'canned tomatoes', quantity: '14', unit: 'oz', textDisplay: '1 x 14 oz can diced or crushed tomatoes' },
      { name: 'chicken stock', quantity: '4', unit: 'cups', textDisplay: '4 cups chicken stock' },
      { name: 'penne pasta', quantity: '1', unit: 'cup', textDisplay: '1 cup dry penne pasta' },
      { name: 'kosher salt', quantity: '2', unit: 'teaspoons', textDisplay: '2 teaspoons kosher salt, more to taste' },
      { name: 'italian seasoning', quantity: '2', unit: 'teaspoons', textDisplay: '2 teaspoons italian seasoning' },
      { name: 'kale', quantity: '1', unit: 'bunch', textDisplay: 'A couple handlfuls chopped kale, optional' },
      { name: 'red chili flakes', quantity: '1', unit: 'teaspoon', textDisplay: '1 teaspoon red chili flakes, adjust to taste' },
      { name: 'black pepper', quantity: '1/4', unit: 'teaspoon', textDisplay: '1/4 teaspoon black pepper, adjust to taste' },
      { name: 'parsley', quantity: '1', unit: 'bunch', textDisplay: '1 packed cup flat-leaf parsley, roughly chopped' },
      { name: 'garlic cloves', quantity: '2', textDisplay: '2 garlic cloves, roughly chopped' },
      { name: 'lemon', quantity: '1', textDisplay: 'Zest of one lemon + 2 teaspoons juice' },
      { name: 'olive oil', quantity: '1/2', units: 'cup', textDisplay: '1/2 cup olive oil' },
      { name: 'kosher salt', quantity: '1/4', units: 'teaspoon', textDisplay: '1/8 - 1/4 teaspoon kosher salt' },
      { name: 'black pepper', quantity: '1/4', units: 'teaspoon', textDisplay: '1/4 teaspoon black pepper, more to taste' },
      { name: 'red chili flakes', quantity: '1', quantity: 'teaspoon', textDisplay: 'pinch chili flakes, optional' },
    ],
    steps: [
      {
        number: 1,
        directions: 'In the instant pot, saute onions in 1 tablespoon of oil until they begin to brown.  Add in garlic and saute for aditional 30 seconds.'
      },
      {
        number: 2,
        directions: `Add in fennel and carrots and saute an additional 4-5 minutes.`
      },
      {
        number: 3,
        directions: 'Add beans, canned tomatoes, chicken broth, 2 cups water, salt and itilian seasoning.  Stir in the dry pasta and kale if using.  '
      },
      {
        number: 4,
        directions: 'Cook on high pressure for 10 minutes.'
      },
      {
        number: 5,
        directions: 'Meanwhile, make gremolata.  Add parsley, garlic cloves and lemon zest to food processor and pulse until chopped.  Add oil, salt, pepper and lemon juice.  Pulse until firmly combined but not smooth.  Use salt and chili flakes to adjust taste.'
      },
      {
        number: 6,
        directions: 'After pressure cooker is finished, quick release pressure.  Adjust taste with salt, pepper, chili flakes.'
      },
      {
        number: 7,
        directions: 'Serve in bowls and add a swirly spoonful of gremolata to each.  Optionally serve with crusty bread and grated pecorino or parmesan.'
      },
    ],
  },
]