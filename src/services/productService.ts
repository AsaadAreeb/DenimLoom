import type { Product } from '../types/product';

const allProducts: Record<string, Product[]> = {
  'apparel': [

    {
      id: '3',
      name: 'Skinny Jeans',
      description: 'Sleek, form-fitting denim that hugs your legs perfectly.',
      detailedDescription: `
    ✔ Ultra-slim fit that enhances your silhouette.<br>
    ✔ Stretchable fabric for maximum comfort and mobility.<br>
    ✔ Perfect for a sleek, modern, and trendy look.<br>
    ✔ Designed to sculpt your legs and flatter your figure effortlessly.<br><br>
    
    Turn heads and own the streets with these stylish skinny jeans!<br>
    Whether you're pairing them with heels for a chic look or sneakers for casual vibes,<br>
    they keep you comfortable and fashionable all day long.
  `,
      image: '/Apparel/Jeans/Skinny Jeans/Skinny Jeans 1.png',
      images: [
        '/Apparel/Jeans/Skinny Jeans/Skinny Jeans 1.png',
        '/Apparel/Jeans/Skinny Jeans/Skinny Jeans 2.png',
        '/Apparel/Jeans/Skinny Jeans/Skinny Jeans 3.png'
      ],
      category: 'apparel'
    },
    {
      id: '4',
      name: 'Straight Leg Jeans',
      description: 'Classic, timeless fit with a straight cut from hip to hem.',
      detailedDescription: `
      ✔ A versatile, balanced fit suitable for all body types.<br>
      ✔ Maintains a consistent width from thigh to ankle.<br>
      ✔ Ideal for casual and semi-formal styling.<br><br>
      Classic never goes out of style! These straight-leg jeans bring the perfect mix of comfort and cool, making them your go-to denim for any occasion. Dress them up or down—you can’t go wrong!
    `,

      image: '/Apparel/Jeans/Straight Leg Jeans/Straight Leg Jeans 1.png',
      images: [
        '/Apparel/Jeans/Straight Leg Jeans/Straight Leg Jeans 1.png',
        '/Apparel/Jeans/Straight Leg Jeans/Straight Leg Jeans 2.png',
        '/Apparel/Jeans/Straight Leg Jeans/Straight Leg Jeans 3.png'
      ],
      category: 'apparel'
    },
    {
      id: '5',
      name: 'Bootcut Jeans',
      description: 'Slightly flared at the hem, perfect for boots and comfort.',
      detailedDescription: `
      ✔ Slight flare at the bottom for a stylish touch.<br>
      ✔ Pairs perfectly with boots and high-top sneakers.<br>
      ✔ Comfortable fit with a vintage yet modern appeal.<br><br>
      Give your outfit that effortlessly cool vibe with these bootcut jeans! The subtle flare adds just the right amount of drama, making them perfect for strutting in style—whether at a party or on a casual day out.
    `,

      image: '/Apparel/Jeans/Bootcut Jeans/Bootcut Jeans 1.png',
      images: [
        '/Apparel/Jeans/Bootcut Jeans/Bootcut Jeans 1.png',
        '/Apparel/Jeans/Bootcut Jeans/Bootcut Jeans 2.png',
        '/Apparel/Jeans/Bootcut Jeans/Bootcut Jeans 3.png'
      ],
      category: 'apparel'
    },
    {
      id: '6',
      name: 'Relaxed Fit Jeans',
      description: 'Loose and comfortable, offering a laid-back and easy feel.',
      detailedDescription: `
      ✔ Extra room in the thighs and seat for all-day comfort.<br>
      ✔ Breathable, loose-fit design for a casual vibe.<br>
      ✔ Great for laid-back styling with a classic feel.<br><br>
      When comfort meets effortless style, you get these relaxed-fit jeans! Whether you’re chilling at home or out exploring the city, they let you move freely while keeping you looking effortlessly cool.
    `,

      image: '/Apparel/Jeans/Relaxed Fit Jeans/Relaxed Fit Jeans 1.png',
      images: [
        '/Apparel/Jeans/Relaxed Fit Jeans/Relaxed Fit Jeans 1.png',
        '/Apparel/Jeans/Relaxed Fit Jeans/Relaxed Fit Jeans 2.png',
        '/Apparel/Jeans/Relaxed Fit Jeans/Relaxed Fit Jeans 3.png'
      ],
      category: 'apparel'
    },
    {
      id: '7',
      name: 'Classic Denim Jackets',
      description: 'Timeless denim staple for effortless style and versatility.',
      detailedDescription: `
      ✔ A wardrobe essential that never goes out of style.<br>
      ✔ Perfect layering piece for any season or occasion.<br>
      ✔ Durable denim with a comfortable, easygoing fit.<br><br>
      A true classic that works with everything! Whether you're dressing up or keeping it casual, this denim jacket adds the perfect touch of effortless cool to your look—season after season.
    `,

      image: '/Apparel/Denim Jackets/Classic Denim Jackets/Classic Denim Jackets 3.jpeg',
      images: [
        '/Apparel/Denim Jackets/Classic Denim Jackets/Classic Denim Jackets 1.jpeg',
        '/Apparel/Denim Jackets/Classic Denim Jackets/Classic Denim Jackets 2.jpeg',
        '/Apparel/Denim Jackets/Classic Denim Jackets/Classic Denim Jackets 3.jpeg',
        '/Apparel/Denim Jackets/Classic Denim Jackets/Classic Denim Jackets 4.jpeg'
      ],
      category: 'apparel'
    },
    {
      id: '8',
      name: 'Denim Bomber Jackets',
      description: 'Sporty meets denim in this cool, modern statement piece.',
      detailedDescription: `
      ✔ A fusion of sporty vibes and rugged denim charm.<br>
      ✔ Ribbed cuffs and hem for a structured, modern fit.<br>
      ✔ Lightweight yet durable for all-day wear.<br><br>
      Get ready to turn heads! This denim bomber jacket brings together street-style energy and classic denim appeal, making it your go-to for laid-back confidence with a touch of attitude.
    `,

      image: '/Apparel/Denim Jackets/Denim Bomber Jackets/Denim Bomber Jackets 2.jpeg',
      images: [
        '/Apparel/Denim Jackets/Denim Bomber Jackets/Denim Bomber Jackets 1.jpeg',
        '/Apparel/Denim Jackets/Denim Bomber Jackets/Denim Bomber Jackets 2.jpeg',
        '/Apparel/Denim Jackets/Denim Bomber Jackets/Denim Bomber Jackets 3.jpeg',
        '/Apparel/Denim Jackets/Denim Bomber Jackets/Denim Bomber Jackets 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '81',
      name: 'Oversized Denim Jackets',
      description: 'Relaxed, trendy fit for a bold and effortless look.',
      detailedDescription: `
      ✔ Loose and relaxed fit for an effortlessly cool aesthetic.<br>
      ✔ Perfect for layering over hoodies, tees, or dresses.<br>
      ✔ Distressed or clean-cut options for every vibe.<br><br>
      Go big or go home! This oversized denim jacket is all about bold, carefree fashion. Throw it on and instantly level up your street-style game—because comfy and stylish is the ultimate combo.
    `,

      image: '/Apparel/Denim Jackets/Oversized Denim Jackets/Oversized Denim Jackets 2.jpeg',
      images: [
        '/Apparel/Denim Jackets/Oversized Denim Jackets/Oversized Denim Jackets 1.jpeg',
        '/Apparel/Denim Jackets/Oversized Denim Jackets/Oversized Denim Jackets 2.jpeg',
        '/Apparel/Denim Jackets/Oversized Denim Jackets/Oversized Denim Jackets 3.jpeg',
        '/Apparel/Denim Jackets/Oversized Denim Jackets/Oversized Denim Jackets 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '82',
      name: 'Trucker Jackets',
      description: 'Iconic rugged denim jacket with a structured, vintage appeal.',
      detailedDescription: `
      ✔ Structured fit with classic button-up front and chest pockets.<br>
      ✔ Rugged yet stylish for an effortlessly edgy look.<br>
      ✔ Ideal for layering in all seasons.<br><br>
      An icon for a reason! The trucker jacket brings vintage charm with a tough, outdoorsy vibe. Whether you're hitting the road or just hitting the town, this denim essential has got your back.
    `,

      image: '/Apparel/Denim Jackets/Trucker Jackets/Trucker Jackets 3.jpeg',
      images: [
        '/Apparel/Denim Jackets/Trucker Jackets/Trucker Jackets 1.jpeg',
        '/Apparel/Denim Jackets/Trucker Jackets/Trucker Jackets 2.jpeg',
        '/Apparel/Denim Jackets/Trucker Jackets/Trucker Jackets 3.jpeg',
        '/Apparel/Denim Jackets/Trucker Jackets/Trucker Jackets 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '9',
      name: 'Button Down Shirts',
      description: 'The perfect mix of casual and polished!',
      detailedDescription: `
      ✔ A wardrobe essential for classic and modern styling.<br>
      ✔ Tailored, oversized, and relaxed fits available.<br>
      ✔ Works great tucked in, layered, or worn open as a jacket.<br><br>
      The perfect mix of casual and polished! This denim button-down is your go-to for an effortlessly stylish look—pair it with jeans for a denim-on-denim vibe or layer it over a dress for a relaxed touch.
    `,

      image: '/Apparel/Denim Shirts/Button Down Shirts/Button Down Shirts 1.jpeg',
      images: [
        '/Apparel/Denim Shirts/Button Down Shirts/Button Down Shirts 1.jpeg',
        '/Apparel/Denim Shirts/Button Down Shirts/Button Down Shirts 2.jpeg',
        '/Apparel/Denim Shirts/Button Down Shirts/Button Down Shirts 3.jpeg',
        '/Apparel/Denim Shirts/Button Down Shirts/Button Down Shirts 4.jpeg'
      ],
      category: 'apparel'
    },
    {
      id: '10',
      name: 'Chambray Shirts',
      description: 'A softer, more laid-back take on denim!',
      detailedDescription: `
      ✔ Lightweight and breathable denim alternative.<br>
      ✔ Soft, smooth texture with a relaxed fit.<br>
      ✔ Perfect for casual wear, office looks, or layering.<br><br>
      A softer, more laid-back take on denim! This chambray shirt is lightweight and versatile, making it the ideal piece for warm weather or easy layering in cooler months.
    `,

      image: '/Apparel/Denim Shirts/Chambray Shirts/Chambray Shirts 1.jpeg',
      images: [
        '/Apparel/Denim Shirts/Chambray Shirts/Chambray Shirts 1.jpeg',
        '/Apparel/Denim Shirts/Chambray Shirts/Chambray Shirts 2.jpeg',
        '/Apparel/Denim Shirts/Chambray Shirts/Chambray Shirts 3.jpeg',
        '/Apparel/Denim Shirts/Chambray Shirts/Chambray Shirts 4.jpeg',
      ],
      category: 'apparel'
    },

    {
      id: '12',
      name: 'A-line Skirts',
      description: "A must-have for effortless elegance!",
      detailedDescription: `
        ✔ Flattering denim skirt with a classic, structured silhouette.<br>
        ✔ Fitted at the waist and flares out for a feminine touch.<br>
        ✔ Available in various washes, distressed styles, and button-front designs.<br><br>
        A must-have for effortless elegance! Whether you're dressing it up with heels or keeping it casual with sneakers, this A-line denim skirt brings timeless charm and all-day comfort.
      `,

      image: '/Apparel/Denim Skirts/A-line Skirt/A-line Skirts 1.jpeg',
      images: [
        '/Apparel/Denim Skirts/A-line Skirt/A-line Skirts 1.jpeg',
        '/Apparel/Denim Skirts/A-line Skirt/A-line Skirts 2.jpeg',
        '/Apparel/Denim Skirts/A-line Skirt/A-line Skirts 3.jpeg',
        '/Apparel/Denim Skirts/A-line Skirt/A-line Skirts 4.jpeg'
      ],
      category: 'apparel'
    },
    {
      id: '13',
      name: 'Denim Maxi Skirts',
      description: "Dress it up or keep it casual—either way, you're bound to steal the spotlight!",
      detailedDescription: `
      ✔ Full-length denim elegance with a sleek and sophisticated vibe.<br>
      ✔ Flowy, high-slit, and button-down styles for added versatility.<br>
      ✔ Perfect for layering with cozy knits or lightweight tops.<br><br>
      Dress it up or keep it casual—either way, you're bound to steal the spotlight! Its long, dramatic silhouette blends vintage inspiration with modern trends, giving you endless outfit possibilities for any occasion.
    `,

      image: '/Apparel/Denim Skirts/Denim Maxi Skirts/Denim Maxi Skirts 1.jpeg',
      images: [
        '/Apparel/Denim Skirts/Denim Maxi Skirts/Denim Maxi Skirts 1.jpeg',
        '/Apparel/Denim Skirts/Denim Maxi Skirts/Denim Maxi Skirts 2.jpeg',
        '/Apparel/Denim Skirts/Denim Maxi Skirts/Denim Maxi Skirts 3.jpeg',
        '/Apparel/Denim Skirts/Denim Maxi Skirts/Denim Maxi Skirts 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '14',
      name: 'Denim Midi Skirts',
      description: "For when you want a little more coverage without sacrificing style!",
      detailedDescription: `
      ✔ The perfect balance between classy and casual.<br>
      ✔ Fitted or A-line cuts with unique stitching and slit details.<br>
      ✔ Customizable in light, dark, and distressed finishes.<br><br>
      For when you want a little more coverage without sacrificing style! The denim midi skirt is effortlessly chic, pairing well with anything from sneakers to ankle boots.
    `,

      image: '/Apparel/Denim Skirts/Denim Midi Skirts/Denim Midi Skirts 1.jpeg',
      images: [
        '/Apparel/Denim Skirts/Denim Midi Skirts/Denim Midi Skirts 1.jpeg',
        '/Apparel/Denim Skirts/Denim Midi Skirts/Denim Midi Skirts 2.jpeg',
        '/Apparel/Denim Skirts/Denim Midi Skirts/Denim Midi Skirts 3.jpeg',
        '/Apparel/Denim Skirts/Denim Midi Skirts/Denim Midi Skirts 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '15',
      name: 'Denim Mini Skirts',
      description: "Flirty and fun, this denim mini skirt is a wardrobe essential!",
      detailedDescription: `
      ✔ Short, stylish, and perfect for showing off your legs.<br>
      ✔ High-waisted, frayed hem, and button-down styles available.<br>
      ✔ Ideal for casual summer days or edgy night-out looks.<br><br>
      Flirty and fun, this denim mini skirt is a wardrobe essential! Throw on a crop top, an oversized sweater, or a graphic tee, and you’re ready to turn heads.
    `,

      image: '/Apparel/Denim Skirts/Denim Mini Skirts/Denim Mini Skirts 2.jpeg',
      images: [
        '/Apparel/Denim Skirts/Denim Mini Skirts/Denim Mini Skirts 1.jpeg',
        '/Apparel/Denim Skirts/Denim Mini Skirts/Denim Mini Skirts 2.jpeg',
        '/Apparel/Denim Skirts/Denim Mini Skirts/Denim Mini Skirts 3.jpeg',
        '/Apparel/Denim Skirts/Denim Mini Skirts/Denim Mini Skirts 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '16',
      name: 'Overalls and Dungarees',
      description: "A denim classic that never fades!",
      detailedDescription: `
      ✔ Classic denim overalls with a relaxed, vintage feel.<br>
      ✔ Adjustable straps and multiple pockets for practicality.<br>
      ✔ Available in skinny, baggy, and cropped styles.<br><br>
      A denim classic that never fades! Whether you go for a laid-back vibe with sneakers or dress it up with heels, these overalls are your go-to for effortless cool.
    `,

      image: '/Apparel/Overalls and Dungarees/Bib Overalls/Bib Overalls 3.jpeg',
      images: [
        '/Apparel/Overalls and Dungarees/Bib Overalls/Bib Overalls 1.jpeg',
        '/Apparel/Overalls and Dungarees/Bib Overalls/Bib Overalls 2.jpeg',
        '/Apparel/Overalls and Dungarees/Bib Overalls/Bib Overalls 3.jpeg',
        '/Apparel/Overalls and Dungarees/Bib Overalls/Bib Overalls 4.jpeg'
      ],
      category: 'apparel'
    },
    {
      id: '161',
      name: 'Overalls and Dungarees',
      description: "Easy, stylish, and full of personality!",
      detailedDescription: `
      ✔ A fun, stylish twist on traditional overalls.<br>
      ✔ Fitted, oversized, and wide-leg options available.<br>
      ✔ Perfect for layering over tees, turtlenecks, or crop tops.<br><br>
      Easy, stylish, and full of personality! Denim dungarees bring that playful, street-style energy that works all year round. Just throw them on and rock your unique look!
    `,

      image: '/Apparel/Overalls and Dungarees/Dungarees/Dungarees 1.png',
      images: [
        '/Apparel/Overalls and Dungarees/Dungarees/Dungarees 1.png',
        '/Apparel/Overalls and Dungarees/Dungarees/Dungarees 2.png',
        '/Apparel/Overalls and Dungarees/Dungarees/Dungarees 3.png'
      ],
      category: 'apparel'
    },
    {
      id: '17',
      name: 'Shirt Dresses',
      description: "Chic, comfortable, and endlessly versatile!",
      detailedDescription: `
      ✔ Buttoned-up denim charm with a structured yet relaxed feel.<br>
      ✔ Features belt, pocket, and slit options for extra flair.<br>
      ✔ Dress it up with boots or keep it casual with sneakers.<br><br>
      Chic, comfortable, and endlessly versatile! The denim shirt dress is perfect for a casual coffee run or a stylish day out—just cinch it at the waist for a flattering touch.
    `,
      image: '/Apparel/Denim Dresses/Shirt Dresses/Shirt Dresses 1.jpeg',
      images: [
        '/Apparel/Denim Dresses/Shirt Dresses/Shirt Dresses 1.jpeg',
        '/Apparel/Denim Dresses/Shirt Dresses/Shirt Dresses 2.jpeg',
        '/Apparel/Denim Dresses/Shirt Dresses/Shirt Dresses 3.jpeg',
        '/Apparel/Denim Dresses/Shirt Dresses/Shirt Dresses 4.jpeg'
      ],
      category: 'apparel'
    },
    {
      id: '18',
      name: 'Slip Dresses',
      description: "Who says denim can’t be elegant?",
      detailedDescription: `
      ✔ Sleek, minimal, and ultra-modern with a denim twist.<br>
      ✔ Fitted, flowy, or A-line silhouettes available.<br>
      ✔ Perfect for layering over tees or wearing solo.<br><br>
      Who says denim can’t be elegant? This slip dress brings effortless beauty with its lightweight feel and flattering fit—perfect for both daytime charm and nighttime glam.
    `,
      image: '/Apparel/Denim Dresses/Slip Dresses/Slip Dresses 1.jpeg',
      images: [
        '/Apparel/Denim Dresses/Slip Dresses/Slip Dresses 1.jpeg',
        '/Apparel/Denim Dresses/Slip Dresses/Slip Dresses 2.jpeg',
        '/Apparel/Denim Dresses/Slip Dresses/Slip Dresses 3.jpeg',
        '/Apparel/Denim Dresses/Slip Dresses/Slip Dresses 4.jpeg',

      ],
      category: 'apparel'
    },
    {
      id: '19',
      name: 'Sundresses Dresses',
      description: "Sunny days call for the perfect denim sundress!",
      detailedDescription: `
      ✔ Breezy denim design for warm-weather perfection.<br>
      ✔ Spaghetti strap, off-shoulder, and ruffled options available.<br>
      ✔ Pairs beautifully with sandals, sneakers, or layered with a jacket.<br><br>
      Sunny days call for the perfect denim sundress! Whether you’re heading to the beach or brunch, this easygoing dress keeps you cool, stylish, and ready for anything.
    `,
      image: '/Apparel/Denim Dresses/Sundresses/Sundresses 1.jpeg',
      images: [
        '/Apparel/Denim Dresses/Sundresses/Sundresses 1.jpeg',
        '/Apparel/Denim Dresses/Sundresses/Sundresses 2.jpeg',
        '/Apparel/Denim Dresses/Sundresses/Sundresses 3.jpeg',
        '/Apparel/Denim Dresses/Sundresses/Sundresses 4.jpeg',
      ],
      category: 'apparel'
    },
    {
      id: '20',
      name: 'Bermuda Shorts',
      description: "Sophisticated meets casual!",
      detailedDescription: `
      ✔ Knee-length denim shorts with a sleek, polished fit.<br>
      ✔ Available in classic and stretch denim for extra comfort.<br>
      ✔ Perfect for casual outings or dressed-up summer looks.<br><br>
      Sophisticated meets casual! These Bermuda denim shorts offer a refined take on summer style, pairing effortlessly with blazers, crop tops, or oversized tees.
    `,


      image: '/Apparel/Denim Shorts/Bermuda Shorts/Bermuda Shorts 1.png',
      images: [
        '/Apparel/Denim Shorts/Bermuda Shorts/Bermuda Shorts 1.png',
        '/Apparel/Denim Shorts/Bermuda Shorts/Bermuda Shorts 2.png',
        '/Apparel/Denim Shorts/Bermuda Shorts/Bermuda Shorts 3.png'
      ],
      category: 'apparel'
    },
    {
      id: '21',
      name: 'Cargo Shorts',
      description: "Function meets fashion!",
      detailedDescription: `
      ✔ Rugged and practical with spacious utility pockets.<br>
      ✔ Loose, relaxed fit for ultimate comfort.<br>
      ✔ Great for street-style, adventure wear, or everyday outfits.<br><br>
      Function meets fashion! These denim cargo shorts are perfect for those who love a laid-back, edgy style with extra storage space for all your essentials.
    `,

      image: '/Apparel/Denim Shorts/Cargo Shorts/Cargo Shorts 1.png',
      images: [
        '/Apparel/Denim Shorts/Cargo Shorts/Cargo Shorts 1.png',
        '/Apparel/Denim Shorts/Cargo Shorts/Cargo Shorts 2.png',
        '/Apparel/Denim Shorts/Cargo Shorts/Cargo Shorts 3.png',],

      category: 'apparel'
    },
    {
      id: '22',
      name: 'Cut-off Shorts',
      description: "Nothing says carefree like a pair of cutoff denim shorts!",
      detailedDescription: `
      ✔ Raw, frayed hems for that effortlessly cool vibe.<br>
      ✔ High-rise, mid-rise, and low-rise options available.<br>
      ✔ Perfect for summer adventures and festival looks.<br><br>
      Nothing says carefree like a pair of cutoff denim shorts! Pair them with a tank top or an oversized button-down for the ultimate casual-chic outfit.
    `,

      image: '/Apparel/Denim Shorts/Cut-off Shorts/Cut-off Shorts 1.png',
      images: [
        '/Apparel/Denim Shorts/Cut-off Shorts/Cut-off Shorts 1.png',
        '/Apparel/Denim Shorts/Cut-off Shorts/Cut-off Shorts 2.png',
        '/Apparel/Denim Shorts/Cut-off Shorts/Cut-off Shorts 3.png',
      ],
      category: 'apparel'
    },
    {
      id: '23',
      name: 'High-waisted Shorts',
      description: "Retro charm meets modern style!",
      detailedDescription: `
      ✔ Flattering fit that accentuates the waist and elongates legs.<br>
      ✔ Stretch and non-stretch options for different styles.<br>
      ✔ Classic five-pocket design with vintage-inspired cuts.<br><br>
      Retro charm meets modern style! These high-waisted denim shorts are perfect for creating that effortlessly put-together look while staying super comfy.
    `,

      image: '/Apparel/Denim Shorts/High-waisted Shorts/High-waisted Shorts 1.png',
      images: [
        '/Apparel/Denim Shorts/High-waisted Shorts/High-waisted Shorts 1.png',
        '/Apparel/Denim Shorts/High-waisted Shorts/High-waisted Shorts 2.png',
        '/Apparel/Denim Shorts/High-waisted Shorts/High-waisted Shorts 3.png',
      ],
      category: 'apparel'
    }
  ],


  'accessories': [


    {
      id: '26',
      name: 'Denim Tote Bags',
      description: "Spacious, stylish, and versatile—your perfect everyday denim tote bag!",
      detailedDescription: `
      ✔ Roomy & Practical – Large interior space to fit all your daily must-haves, from laptops to makeup pouches.<br>
      ✔ Versatile Designs – Choose from classic, distressed, patchwork, or embroidered denim styles.<br>
      ✔ Strong & Durable – Reinforced handles and premium denim fabric ensure long-lasting use.<br>
      ✔ Effortless Styling – Pairs perfectly with jeans, dresses, or casual outfits for a trendy, laid-back vibe.<br><br>
      A timeless essential for those who love fashion with function! This denim tote bag is designed for your daily hustle while keeping your style on point. Spacious, durable, and effortlessly chic, it's the perfect companion for work, shopping, or casual outings.
    `,

      image: '/Accessories/Denim Tote Bags/Denim Shopper Totes/Denim Shopper Totes 1.png',
      images: [
        '/Accessories/Denim Tote Bags/Denim Shopper Totes/Denim Shopper Totes 1.png',
        '/Accessories/Denim Tote Bags/Denim Shopper Totes/Denim Shopper Totes 2.png',
        '/Accessories/Denim Tote Bags/Denim Shopper Totes/Denim Shopper Totes 3.png'
      ],
      category: 'accessories'
    },
    {
      id: '261',
      name: 'Overnight Totes',
      description: "Travel in style with a spacious, trendy, and durable denim tote!",
      detailedDescription: `
      ✔ Spacious Interior – Large compartments to carry clothes, toiletries, and all your travel necessities.<br>
      ✔ Durable & Travel-Friendly – Strong denim fabric that withstands wear and tear while staying stylish.<br>
      ✔ Stylish & Trendy – Classic denim design with modern touches for a fashionable travel look.<br>
      ✔ Easy to Carry – Comfortable handles and optional shoulder straps for hands-free convenience.<br><br>
      Heading for a weekend escape? This denim overnight tote is your go-to travel essential. Spacious enough to hold all your getaway must-haves while keeping you stylish on the move. Whether it's a short trip or a sleepover, pack your essentials and travel in denim-inspired fashion.
    `,

      image: '/Accessories/Denim Tote Bags/Overnight Totes/Overnight Totes 1.png',
      images: [
        '/Accessories/Denim Tote Bags/Overnight Totes/Overnight Totes 1.png',
        '/Accessories/Denim Tote Bags/Overnight Totes/Overnight Totes 2.png',
        '/Accessories/Denim Tote Bags/Overnight Totes/Overnight Totes 3.png',
      ],
      category: 'accessories'
    },
    {
      id: '27',
      name: 'Denim Backpacks',
      description: "Trendy, functional, and spacious—your go-to denim backpack for everyday!",
      detailedDescription: `
      ✔ Spacious & Organized – Multiple pockets and compartments to keep everything in place.<br>
      ✔ Adjustable Comfort – Padded straps ensure a comfortable fit, no matter where you're headed.<br>
      ✔ Timeless Denim Aesthetic – Available in faded, distressed, dark-wash, and even embellished designs.<br>
      ✔ Perfect for Any Occasion – Whether you're on campus, commuting, or exploring, this backpack is a statement piece.<br><br>
      Take your everyday essentials in style with this effortlessly cool denim backpack. Designed for work, school, or travel, it blends comfort, durability, and trendsetting style into one must-have bag.
    `,

      image: '/Accessories/Denim Backpacks/Denim Classic Bagpacks/Denim Classic Bagpacks 2.png',
      images: [
        '/Accessories/Denim Backpacks/Denim Classic Bagpacks/Denim Classic Bagpacks 1.png',
        '/Accessories/Denim Backpacks/Denim Classic Bagpacks/Denim Classic Bagpacks 2.png',
        '/Accessories/Denim Backpacks/Denim Classic Bagpacks/Denim Classic Bagpacks 3.png'
      ],
      category: 'accessories'
    },
    {
      id: '28',
      name: 'Hats and Caps',
      description: "Cool, comfy, and stylish—denim hats to complete any outfit!",
      detailedDescription: `
        ✔ Stylish Options – Choose from classic baseball caps, bucket hats, or trendy wide-brim styles.<br>
        ✔ Comfortable Fit – Soft yet structured denim molds to your head shape perfectly.<br>
        ✔ Lightweight & Breathable – Keeps you cool while adding a stylish touch to any outfit.<br>
        ✔ Pairs with Everything – From casual jeans to summer dresses, this hat completes your look!<br><br>
        Add a touch of effortless cool to your look with our denim hats and caps. Whether you're aiming for street style or sun protection, these caps bring comfort and confidence with every wear.
      `,

      image: '/Accessories/Hats and Caps/Baseball Caps/Baseball Caps 1.png',
      images: [
        '/Accessories/Hats and Caps/Baseball Caps/Baseball Caps 1.png',
        '/Accessories/Hats and Caps/Baseball Caps/Baseball Caps 2.png',
        '/Accessories/Hats and Caps/Baseball Caps/Baseball Caps 3.png'
      ],
      category: 'accessories'
    },
    {
      id: '29',
      name: 'Denim Belts',
      description: "Chic denim belts to add an effortless edge to any outfit!",
      detailedDescription: `
      ✔ Unique Denim Texture – A fresh take on the classic belt, giving a cool, edgy vibe.<br>
      ✔ Adjustable Fit – Available in different widths, with stylish buckles for the perfect fit.<br>
      ✔ Endless Styling Options – Wear it with jeans, cinch a dress, or pair it with skirts for a chic touch.<br>
      ✔ Available in Various Washes – Choose from dark, faded, or embroidered designs for a personalized look.<br><br>
      A belt that does more than hold your jeans—it completes your outfit! Whether you're adding a subtle touch or making a bold statement, our denim belts are the perfect accessory to enhance your style.
    `,

      image: '/Accessories/Denim Belts/Classic Belts/Classic Belts 1.png',
      images: [
        '/Accessories/Denim Belts/Classic Belts/Classic Belts 1.png',
        '/Accessories/Denim Belts/Classic Belts/Classic Belts 2.png',
        '/Accessories/Denim Belts/Classic Belts/Classic Belts 3.png'
      ],
      category: 'accessories'
    },
    {
      id: '30',
      name: 'Wallets and Pouches',
      description: "Compact, trendy, and durable—denim wallets and pouches for every occasion!",
      detailedDescription: `
        ✔ Compact & Convenient – Designed to fit easily into bags or pockets while holding all your essentials.<br>
        ✔ Secure & Stylish – Multiple compartments for cash, cards, and small accessories.<br>
        ✔ Durable & Fashionable – Made from high-quality denim for a rugged yet trendy look.<br>
        ✔ Perfect for On-the-Go – Whether you're traveling, shopping, or heading out, this is the accessory you need.<br><br>
        Small yet stylish, these denim wallets and pouches are designed for those who love a mix of fashion and function. Whether you need a sleek everyday wallet or a trendy pouch for essentials, these pieces are made to keep your style intact while staying organized.
      `,


      image: '/Accessories/Wallets and Pouches/Bifold Wallets/Wallets and Pouches 1.png',
      images: [
        '/Accessories/Wallets and Pouches/Bifold Wallets/Wallets and Pouches 1.png',
        '/Accessories/Wallets and Pouches/Bifold Wallets/Wallets and Pouches 2.png',
        '/Accessories/Wallets and Pouches/Bifold Wallets/Wallets and Pouches 3.png'
      ],
      category: 'accessories'
    },
    {
      id: '301',
      name: 'Denim Headbands',
      description: "Effortless style meets everyday comfort—Denim headbands for a chic upgrade!",
      detailedDescription: `
      ✔ Trendy & Versatile – Perfect for casual outfits, gym wear, or an elevated street-style look.<br>
      ✔ Comfortable Fit – Soft, stretchable denim ensures a snug yet gentle hold all day.<br>
      ✔ Multiple Styles Available – Choose from knotted, twisted, wide, or embellished designs.<br>
      ✔ Durable & Easy to Maintain – High-quality denim that’s long-lasting and easy to clean.<br><br>
      Add the perfect finishing touch to your look with our stylish denim headbands. Whether you're keeping your hair in place or making a bold fashion statement, these headbands blend comfort, durability, and effortless style.
    `,

      image: '/Accessories/Headbands/Headbands 1.png',
      images: [
        '/Accessories/Headbands/Headbands 1.png',
        '/Accessories/Headbands/Headbands 2.png',
        '/Accessories/Headbands/Headbands 3.png',
      ],
      category: 'accessories'
    }
  ],
  'footwear': [

    {
      id: '311',
      name: 'High-top Sneakers',
      description: "Classic denim high-tops for effortless street style and all-day comfort!",
      detailedDescription: `
      ✔ Iconic High-Top Design – Adds a bold, retro-inspired touch to your everyday look.<br>
      ✔ Durable Denim Material – Soft yet sturdy denim that molds to your feet over time.<br>
      ✔ Cushioned Comfort – Padded insoles and ankle support for long-lasting wear.<br>
      ✔ Versatile Styling – Pairs effortlessly with jeans, joggers, skirts, and even dresses!<br><br>
      Classic meets cool in these denim high-top sneakers! Whether you're rocking street style or keeping it casual, these sneakers give you the perfect mix of comfort and attitude. Designed for all-day wear, they bring effortless style to any outfit.
    `,

      image: '/footwear/Denim Sneakers/High-top Sneakers/High-top Sneakers 2.png',
      images: [
        '/footwear/Denim Sneakers/High-top Sneakers/High-top Sneakers 1.png',
        '/footwear/Denim Sneakers/High-top Sneakers/High-top Sneakers 2.png',
        '/footwear/Denim Sneakers/High-top Sneakers/High-top Sneakers 3.png'
      ],
      category: 'footwear'
    },
    {
      id: '312',
      name: 'Low-top Sneakers',
      description: "Sleek denim low-tops that blend casual comfort with everyday versatility!",
      detailedDescription: `
      ✔ Minimalist & Trendy – A clean, modern look that elevates your casual style.<br>
      ✔ Comfortable & Lightweight – Designed for all-day movement with cushioned support.<br>
      ✔ Breathable Denim Fabric – Keeps your feet cool while adding a unique texture.<br>
      ✔ Goes with Everything – Whether it’s jeans, shorts, or a summer dress, these sneakers fit right in!<br><br>
      Stay sleek and stylish with denim low-top sneakers! Perfect for casual days or dressing down a sharp outfit, these sneakers bring a fresh twist to a classic staple. Lightweight, breathable, and endlessly versatile, they’re made for everyday wear.
    `,


      image: '/footwear/Denim Sneakers/Low-top Sneakers/Low-top Sneakers 1.png',
      images: [
        '/footwear/Denim Sneakers/Low-top Sneakers/Low-top Sneakers 1.png',
        '/footwear/Denim Sneakers/Low-top Sneakers/Low-top Sneakers 2.png',
        '/footwear/Denim Sneakers/Low-top Sneakers/Low-top Sneakers 3.png'
      ],
      category: 'footwear'
    },
    {
      id: '313',
      name: 'Running Sneakers',
      description: "Stylish denim-inspired running shoes built for speed, comfort, and performance!",
      detailedDescription: `
      ✔ High-Performance Comfort – Lightweight and breathable, keeping your feet fresh mile after mile.<br>
      ✔ Shock-Absorbing Sole – Cushioned midsole for extra bounce and energy return.<br>
      ✔ Secure Fit & Support – Designed to keep your foot locked in place with flexible movement.<br>
      ✔ Sporty Yet Stylish – A perfect blend of function and fashion, taking you from workouts to casual outings effortlessly.<br><br>
      Run in style with denim-inspired running sneakers that bring comfort, durability, and a unique edge to your workout or everyday routine. Designed for both performance and fashion, these sneakers make movement look good.
    `,

      image: '/footwear/Denim Sneakers/Running Shoes/Running Shoes 1.png',
      images: [
        '/footwear/Denim Sneakers/Running Shoes/Running Shoes 1.png',
        '/footwear/Denim Sneakers/Running Shoes/Running Shoes 2.png',
        '/footwear/Denim Sneakers/Running Shoes/Running Shoes 3.png'
      ],
      category: 'footwear'
    },
    {
      id: '32',
      name: 'Ankle Boots',
      description: "Trendy denim ankle boots that redefine cool with effortless versatility!",
      detailedDescription: `
        ✔ Chic & Versatile – Effortlessly transitions from casual to dressy looks.<br>
        ✔ Premium Denim Texture – Unique, soft-washed denim with stylish detailing.<br>
        ✔ Comfortable Heel & Sole – Designed for long walks without compromising on style.<br>
        ✔ Perfect for Any Outfit – Pair with jeans, skirts, dresses, or even shorts for a fashion-forward look.<br><br>
        Step up your denim game with ankle boots that redefine cool! Whether you're going for edgy, boho, or classic vibes, these boots add the perfect finishing touch. Stylish, sturdy, and endlessly versatile, they are a must-have for any season.
      `,


      image: '/footwear/Denim Boots/Ankle Boots/Ankle Boots 1.png',
      images: [
        '/footwear/Denim Boots/Ankle Boots/Ankle Boots 1.png',
        '/footwear/Denim Boots/Ankle Boots/Ankle Boots 2.png',
        '/footwear/Denim Boots/Ankle Boots/Ankle Boots 3.png'
      ],
      category: 'footwear'
    },
    {
      id: '321',
      name: 'Knee-high Boots',
      description: "Bold denim knee-high boots for a striking, fashion-forward statement!",
      detailedDescription: `
        ✔ Bold & Fashion-Forward – A standout piece that adds instant style to any look.<br>
        ✔ Snug Yet Comfortable Fit – Designed to hug your legs without feeling too tight.<br>
        ✔ Durable & Stylish Denim – Available in classic blue, black, and distressed washes.<br>
        ✔ Effortless Pairing – Wear with mini dresses, skinny jeans, or oversized sweaters for a show-stopping outfit!<br><br>
        Turn heads with denim knee-high boots that bring drama, elegance, and a touch of rebellious flair! Whether you want sleek and polished or distressed and edgy, these boots are made to make a statement.
      `,

      image: '/footwear/Denim Boots/Knee-high Boots/Knee-high Boots 3.png',
      images: [
        '/footwear/Denim Boots/Knee-high Boots/Knee-high Boots 1.png',
        '/footwear/Denim Boots/Knee-high Boots/Knee-high Boots 2.png',
        '/footwear/Denim Boots/Knee-high Boots/Knee-high Boots 3.png'
      ],
      category: 'footwear'
    },

  ],
  'home-and-lifestyle': [
    {
      id: '34',
      name: 'Denim Cushion Covers',
      description: "Soft, stylish, and timeless—denim cushions for a cozy, chic space!",
      detailedDescription: `
      ✔ Premium Denim Fabric – Soft, durable, and available in various washes and textures.<br>
      ✔ Versatile Home Décor – Perfect for sofas, chairs, beds, or even outdoor seating.<br>
      ✔ Unique & Stylish – Choose from classic blue, distressed, patchwork, or embroidered designs.<br>
      ✔ Easy to Maintain – Machine washable and fade-resistant for long-lasting beauty.<br><br>
      Add a touch of effortless style to your home with these trendy denim cushions. Whether you love a rustic, modern, or vintage vibe, these cushions bring comfort and charm to any room.
    `,
      image: '/homelifestyle/Cusion Covers/Denim Cushion Covers 1.jpeg',
      images: [
        '/homelifestyle/Cusion Covers/Denim Cushion Covers 1.jpeg',
        '/homelifestyle/Cusion Covers/Denim Cushion Covers 3.jpeg',
        '/homelifestyle/Cusion Covers/Denim Cushion Covers 5.jpeg',
      ],
      category: 'home-and-lifestyle'
    },
    {
      id: '35',
      name: 'Denim Table Runners',
      description: "Rustic charm meets modern style—denim table runners for every occasion!",
      detailedDescription: `
      ✔ Chic & Trendy – Brings a rustic, industrial, or farmhouse touch to any dining setup.<br>
      ✔ High-Quality Denim – Made from thick, durable denim that withstands spills and frequent use.<br>
      ✔ Versatile Styling – Available in dark-wash, faded, or stitched designs to suit your decor.<br>
      ✔ Easy to Clean – Machine washable and fade-resistant, perfect for everyday dining.<br><br>
      Transform your dining space with a denim table runner that adds a touch of casual elegance. Whether for daily use or special gatherings, this runner enhances your table with a laid-back yet sophisticated look.
    `,

      image: '/homelifestyle/Table Runners/Denim Table Runners 1.jpeg',
      images: [
        '/homelifestyle/Table Runners/Denim Table Runners 1.jpeg',
        '/homelifestyle/Table Runners/Denim Table Runners 4.jpeg',
        '/homelifestyle/Table Runners/Denim Table Runners 3.jpeg',
      ],
      category: 'home-and-lifestyle'
    },
    {
      id: '36',
      name: 'Denim Aprons',
      description: "Cook, craft, and create in style with durable denim aprons!",
      detailedDescription: `
      ✔ Durable & Functional – Heavy-duty denim fabric resists stains and provides long-lasting wear.<br>
      ✔ Adjustable & Comfortable – Features adjustable neck straps and waist ties for a perfect fit.<br>
      ✔ Multiple Pockets – Convenient storage for cooking utensils, tools, or even your phone.<br>
      ✔ Timeless Denim Look – Available in classic, distressed, or embroidered styles to match your vibe.<br><br>
      Whether you're cooking up a storm, painting a masterpiece, or working in the garden, a denim apron keeps you protected while looking effortlessly stylish.
    `,

      image: '/homelifestyle/Aprons/Denim Aprons 1.png',
      images: [
        '/homelifestyle/Aprons/Denim Aprons 1.png',
        '/homelifestyle/Aprons/Denim Aprons 2.png',
        '/homelifestyle/Aprons/Denim Aprons 3.png',
      ],
      category: 'home-and-lifestyle'
    },
    {
      id: '37',
      name: 'Upcycled Denim Rugs',
      description: "Sustainable, stylish, and handcrafted—upcycled denim rugs with a story to tell!",
      detailedDescription: `
      ✔ Eco-Friendly & Handmade – Crafted from recycled denim, reducing waste and promoting sustainability.<br>
      ✔ Unique Designs – Each rug features a blend of denim washes, patchwork, or woven textures.<br>
      ✔ Soft & Durable – Thick, high-quality fabric provides comfort underfoot while lasting for years.<br>
      ✔ Perfect for Any Space – Ideal for living rooms, bedrooms, or even office spaces for a casual-chic feel.<br><br>
      Give your home an eco-friendly upgrade with upcycled denim rugs! Made from repurposed denim, these one-of-a-kind rugs bring texture, character, and sustainability to any space.
    `,

      image: '/homelifestyle/Rugs/Denim Upcycled Rugs 2.png',
      images: [
        '/homelifestyle/Rugs/Denim Upcycled Rugs 2.png',
        '/homelifestyle/Rugs/Denim Upcycled Rugs 1.png',
        '/homelifestyle/Rugs/Denim Upcycled Rugs 3.png',
      ],
      category: 'home-and-lifestyle'
    }
  ],

  'Denim Premium Raw Cloth': [
    {
      id: '38',
      name: 'Premium Organic Raw Cotton',
      description: "Soft, breathable, and eco-friendly—experience the luxury of organic cotton!",
      detailedDescription: `
      ✔ 100% Organic & Chemical-Free – Grown without pesticides or harmful chemicals for a pure, natural feel.<br>
      ✔ Ultra-Soft & Breathable – Lightweight and gentle on the skin, perfect for all-day comfort.<br>
      ✔ Eco-Friendly & Sustainable – Supports ethical farming practices and reduces environmental impact.<br>
      ✔ Available in Raw Form – Purchase in bulk and customize for your own production needs.<br><br>
      Made for those who appreciate comfort and sustainability, our premium organic cotton is ultra-soft, skin-friendly, and responsibly sourced. Perfect for clothing, bedding, and accessories, it’s a must-have for a greener, more comfortable lifestyle.
    `,

      image: '/Raw/Jeans raw 1.jpeg',
      images: [
        '/Raw/Jeans raw 1.jpeg',
      ],
      category: 'Denim Premium Raw Cloth'
    },
    {
      id: '39',
      name: 'Premium Raw Denim',
      description: "Authentic, rugged, and built to last—raw denim for true denim lovers!",
      detailedDescription: `
      ✔ Unwashed & Untreated – Pure denim in its rawest form, ready to mold to your lifestyle.<br>
      ✔ Custom Fades & Wear – Develops a one-of-a-kind look over time, reflecting your unique journey.<br>
      ✔ Durable & Long-Lasting – Woven from high-quality cotton for superior strength and longevity.<br>
      ✔ Available for Bulk & Custom Production – Purchase raw denim in your desired quantity for personal or business use.<br><br>
      Unprocessed, unwashed, and full of character, raw denim is the ultimate choice for denim enthusiasts who love a personalized fit and unique aging process. The more you wear it, the better it gets!
    `,

      image: '/Raw/Organic Cotton Denim.jpeg',
      images: [
        '/Raw/Organic Cotton Denim.jpeg',
      ],
      category: 'Denim Premium Raw Cloth'
    },

  ]
};


export function getProductsByCategory(category: string): Product[] {
  return allProducts[category] || [];
}

export function getProductById(id: string): Product | null {
  for (const category in allProducts) {
    const product = allProducts[category].find(p => p.id === id);
    if (product) return { ...product, category };
  }
  return null;
}
