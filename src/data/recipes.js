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
        directions: 'Add remaining chopped vegetables.  Cook on high for 2 minutes.  Quick release pressure'
      },
      {
        number: 7,
        directions: 'Stir in cashew sauce from step 2, garnish with cilantro, serve with white rice.'
      },
    ],
  },
]