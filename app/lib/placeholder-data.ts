// CUSTOMERS

const customers = [
  {
    id: 'c1f7c9a2-8c3d-4b91-9f2a-6e8a1b5d2c10',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    id: '9a2d6e4b-3f71-4c88-8a6b-2d9f5c7e1a33',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    password: 'password456',
  },
];

const categories = [
  { id: '7b1f3d2a-5c6e-4a91-8b2c-9d3f7e1a4c55', name: "men's clothing" },
  { id: '2e9a1c4d-8b6f-4d33-9c2a-5f7b1e3a6d77', name: 'jewelery' },
  { id: '5d3a7c1e-9b2f-4e88-a6c1-3f9d2b7a4e99', name: 'electronics' },
  { id: '4d7b3e9d-5e20-4e57-ad41-ea2fd5e748dc', name: "women's clothing" },
];

// PRODUCTS

const products = [
  {
    id: 'fa665979-4d5b-46dd-81d5-28a4f4ccd990',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 10995,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category_id: categories[0].id,
    image_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: { rate: 3.9, count: 120 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'ebe12a0e-ff9e-476a-8c20-2babbba035e9',
    name: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 2230,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category_id: categories[0].id,
    image_url:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    rating: { rate: 4.1, count: 259 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '15b557ea-fd17-4b12-9c2e-a8125273a488',
    name: 'Mens Cotton Jacket',
    price: 5599,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category_id: categories[0].id,
    image_url: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
    rating: { rate: 4.7, count: 500 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'edeecdf0-4ae5-436c-9ca4-d82cc787b9aa',
    name: 'Mens Casual Slim Fit',
    price: 1599,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category_id: categories[0].id,
    image_url: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
    rating: { rate: 2.1, count: 430 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'd07f4e3b-d434-4db9-9061-78ac74cf9d27',
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 69500,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category_id: categories[1].id,
    image_url:
      'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png',
    rating: { rate: 4.6, count: 400 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'deded2a2-758f-40c2-ab81-2f2b58c0fb87',
    name: 'Solid Gold Petite Micropave ',
    price: 16800,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category_id: categories[1].id,
    image_url:
      'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png',
    rating: { rate: 3.9, count: 70 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '1cdd0bde-f375-4f6f-b32f-1c1199e71dc0',
    name: 'White Gold Plated Princess',
    price: 999,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category_id: categories[1].id,
    image_url:
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png',
    rating: { rate: 3, count: 400 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'e2c9946d-54e3-4ca7-ac3e-d1e9a1dea9a7',
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 1099,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category_id: categories[1].id,
    image_url:
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png',
    rating: { rate: 1.9, count: 100 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '0c4e4002-6715-4d44-b79e-2d5d20508c15',
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 6400,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category_id: categories[2].id,
    image_url: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png',
    rating: { rate: 3.3, count: 203 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '60bc571b-01ee-4010-925b-0b875a618f63',
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 10900,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    category_id: categories[2].id,
    image_url: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png',
    rating: { rate: 2.9, count: 470 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '4a56e30a-9694-4899-bd73-498f18ec79c0',
    name: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 10900,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category_id: categories[2].id,
    image_url: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png',
    rating: { rate: 4.8, count: 319 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '4a22eac9-fb24-4778-82e9-40fc24379ad3',
    name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 11400,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category_id: categories[2].id,
    image_url: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png',
    rating: { rate: 4.8, count: 400 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'e8bf7ded-1325-4fe9-89af-1d7e83d485f9',
    name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 59900,
    description:
      '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
    category_id: categories[2].id,
    image_url: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png',
    rating: { rate: 2.9, count: 250 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '201c83d2-cb75-41b9-9977-144b56a5199f',
    name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
    price: 99999,
    description:
      '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    category_id: categories[2].id,
    image_url: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png',
    rating: { rate: 2.2, count: 140 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '494e7014-fb23-4685-a93a-adb4e78ed445',
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 5699,
    description:
      'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
    category_id: categories[3].id,
    image_url: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png',
    rating: { rate: 2.6, count: 235 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: '1cd59cbc-6426-4ac6-8fcd-4b9fc403ae39',
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 2995,
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    category_id: categories[3].id,
    image_url: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png',
    rating: { rate: 2.9, count: 340 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'f249b4f1-7a6b-412a-9c02-b9a1c194ff13',
    name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 3999,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category_id: categories[3].id,
    image_url: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png',
    rating: { rate: 3.8, count: 679 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'c7632be2-104d-4462-9ba7-d2e921613d67',
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 985,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    category_id: categories[3].id,
    image_url: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png',
    rating: { rate: 4.7, count: 130 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'ce459f10-9e79-4c58-9b5f-a1d511bc0427',
    name: "Opna Women's Short Sleeve Moisture",
    price: 795,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category_id: categories[3].id,
    image_url: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png',
    rating: { rate: 4.5, count: 146 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
  {
    id: 'c9b35e6b-4a3e-4354-9b83-bf6d0050de0d',
    name: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 1299,
    description:
      '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
    category_id: categories[3].id,
    image_url: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png',
    rating: { rate: 3.6, count: 145 },
    created_at: '2026-05-12',
    updated_at: '2026-05-12',
  },
];

// CARTS

const carts = [
  {
    id: '8d2f6c1a-3b7e-4a99-9c1f-5e3a7b2d6c88',
    customer_id: customers[0].id,
    items: [
      {
        id: 'd1a3c7e9-5b2f-4a44-8c6d-2e1b7f3a9d11',
        cart_id: '8d2f6c1a-3b7e-4a99-9c1f-5e3a7b2d6c88',
        product_id: products[0].id,
        name: products[0].name,
        price: products[0].price,
        image_url: products[0].image_url,
        quantity: 2,
      },
      {
        id: 'e2b7c1a4-6d5f-4c77-8a3b-5f1d2e7c9a22',
        cart_id: '8d2f6c1a-3b7e-4a99-9c1f-5e3a7b2d6c88',
        product_id: products[2].id,
        name: products[2].name,
        price: products[2].price,
        image_url: products[2].image_url,
        quantity: 1,
      },
    ],
    created_at: '2024-02-01T10:00:00Z',
    updated_at: '2024-02-01T10:00:00Z',
  },
];

// CART ITEMS

const cart_items = [];

// ORDERS

const orders = [
  {
    id: '1a7c3e9d-5b2f-4d66-8c1a-9e3b7d2f6a55',
    customer_id: customers[0].id,
    items: [
      {
        product_id: products[0].id,
        name: products[0].name,
        price: products[0].price,
        quantity: 2,
        image_url: products[0].image_url,
      },
      {
        product_id: products[2].id,
        name: products[2].name,
        price: products[2].price,
        quantity: 1,
        image_url: products[2].image_url,
      },
    ],
    status: 'pending',
    address: {
      street: '123 Main St',
      state: 'Lagos State',
      postal_code: '100001',
      country: 'Nigeria',
    },
    billing_address: {
      street: '123 Main St',
      state: 'Lagos State',
      postal_code: '100001',
      country: 'Nigeria',
    },
    pricing: {
      subtotal: 31194,
      shipping_fee: 500,
      tax: 4679,
      discount: 0,
      total: 36373,
    },
    payment: {
      method: 'credit_card',
      transaction_id: 'txn_001a7c3e9d',
      status: 'pending',
    },
    created_at: '2024-02-10T12:00:00Z',
    updated_at: '2024-02-10T12:00:00Z',
  },
  {
    id: '6f2b9d1c-4a7e-4c88-9a3d-1e7b5c2f6d99',
    customer_id: customers[1].id,
    items: [
      {
        product_id: products[1].id,
        name: products[1].name,
        price: products[1].price,
        quantity: 1,
        image_url: products[1].image_url,
      },
    ],
    status: 'paid',
    address: {
      street: 'Naibawa Kano State Nigeria',
      state: 'Kano State Nigeria',
      postal_code: '000000',
      country: 'Nigeria',
    },
    billing_address: {
      street: 'Naibawa Kano State Nigeria',
      state: 'Kano State Nigeria',
      postal_code: '000000',
      country: 'Nigeria',
    },
    pricing: {
      subtotal: 2230,
      shipping_fee: 500,
      tax: 335,
      discount: 0,
      total: 3065,
    },
    payment: {
      method: 'credit_card',
      transaction_id: 'txn_6f2b9d1c4a',
      status: 'paid',
    },
    created_at: '2024-02-11T15:30:00Z',
    updated_at: '2024-02-11T15:30:00Z',
  },
];

// ==============================
// ORDER ITEMS
// ==============================

const order_items = [];

// EXPORTS

export {
  customers,
  categories,
  products,
  carts,
  cart_items,
  orders,
  order_items,
};
