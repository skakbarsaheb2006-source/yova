/**
 * YOVA COLLECTIONS - LUXURY JEWELLERY WEB APPLICATION
 * Business Name: Yova Collections
 * Products: Rolled gold jewellery and handmade rolled gold jewellery
 * WhatsApp Order Number: 9701959456
 * Instagram: Yova Collections
 * Languages Supported: English (default), Telugu (తెలుగు), Hindi (हिन्दी)
 */

// ==========================================
// 1. I18N DICTIONARY & TRANSLATIONS
// ==========================================
const translations = {
  en: {
    announcement: "✨ Free Pan-India Delivery on orders above ₹1,999 | Direct WhatsApp Ordering Available",
    wa_helpline: "Helpline: +91 9701959456",
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About Us",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    order_on_wa: "Order on WhatsApp",
    order_on_wa_bubble: "Order on WhatsApp",
    select_language: "Language / భాష / भाषा:",
    chat_on_wa: "Chat on WhatsApp (9701959456)",
    hero_badge: "Premium Gold Finish",
    hero_title_1: "Beautiful Jewellery for",
    hero_title_2: "Every Occasion",
    hero_desc: "Elegant rolled gold jewellery with a rich gold look, lasting shine, and comfortable everyday wear.",
    explore_collection: "Explore Collection",
    order_on_whatsapp: "WhatsApp Order",
    trust_quality: "100% Guaranteed Rolled Gold",
    trust_handmade: "Artisanal Handmade Finish",
    trust_shipping: "Safe Doorstep Delivery",
    hero_badge_featured: "Signature Bridal Collection",
    hero_badge_sub: "Handcrafted Antique Masterpiece",
    pillar_1_title: "Authentic Rolled Gold",
    pillar_1_desc: "Premium rolled gold jewellery with a lasting shine, crafted for comfortable everyday wear and a gentle feel on your skin.",
    pillar_2_title: "Handcrafted by Masters",
    pillar_2_desc: "Every nakshi, peacock, and floral motif is delicately crafted by skilled generational artisans.",
    pillar_3_title: "Instant WhatsApp Orders",
    pillar_3_desc: "Direct one-tap chat with our jewellery specialists for custom sizing, real live video previews, and quick delivery.",
    pillar_4_title: "Transparent Pricing",
    pillar_4_desc: "Direct artisan-to-customer pricing without showroom markups. Luxury within your reach.",
    tag_curated: "CURATED EXCELLENCE",
    bestsellers_title: "Our Bestselling Creations",
    bestsellers_sub: "Adorn yourself with traditional elegance and royal charm crafted for weddings and celebrations.",
    view_all_products: "View Full Jewellery Catalogue",
    the_yova_legacy: "THE YOVA LEGACY",
    spotlight_heading: "Why Traditional Rolled Gold is the Smarter Luxury",
    spotlight_p1: "At Yova Collections, we bridge heritage temple artistry with modern elegance. Our rolled gold jewellery features heavy sheets of gold mechanically fused to premium brass/copper bases, delivering the exact warm glow and weight of 22-karat solid gold.",
    spotlight_p2: "Unlike ordinary thin gold plating that fades quickly, our handmade rolled gold pieces retain their brilliance for years when cared for. Designed for weddings, grand festivals, and daily grace.",
    handmade_purity: "Artisanal Craftsmanship",
    feat_1: "Rich 22K Royal Look & Feel",
    feat_2: "Lead & Nickel Safe / Hypoallergenic",
    feat_3: "Live Video Call Preview on WhatsApp",
    feat_4: "Pan-India Express Safe Shipping",
    request_video_preview: "Request Video Call Preview",
    tag_reviews: "HAPPY PATRONS",
    reviews_title: "Loved by Jewellery Connoisseurs",
    review_1_text: "\"The rolled gold Lakshmi temple haram looks indistinguishable from real 22k gold! All my relatives at my cousin's wedding thought it was solid gold. Thank you Yova Collections!\"",
    review_2_text: "\"Ordered the handmade peacock kadas via WhatsApp. The response was super quick, they showed me close-up videos, and delivered within 3 days in safe packaging. Extremely satisfied!\"",
    review_3_text: "\"Quality of the Gutpusalu necklace is top-notch! The pearls and kemp stones have such a royal antique sheen. Very convenient to order on WhatsApp with just one click.\"",
    follow_insta: "Join Our Growing Community on Instagram",
    insta_desc: "Follow @YovaCollections for daily updates, customer styling reels, and new design drops.",
    catalog_tag: "COMPLETE COLLECTION",
    catalog_title: "Rolled Gold & Handmade Jewellery",
    catalog_sub: "Explore our full line-up of South Indian necklaces, temple jewellery, antique kadas, and handcrafted earrings.",
    filter_all: "All Pieces",
    filter_handmade: "Handmade Rolled Gold",
    filter_rolled_gold: "Rolled Gold Classics",
    filter_necklaces: "Necklaces & Chokers",
    filter_bangles: "Bangles & Kadas",
    filter_earrings: "Earrings & Jhumkas",
    sort_by: "Sort by:",
    sort_featured: "Featured & Popular",
    sort_price_low: "Price: Low to High",
    sort_price_high: "Price: High to Low",
    sort_name: "Name (A - Z)",
    wa_notice: "💡 Instant ordering on WhatsApp with live confirmation",
    no_products_title: "No matching jewellery pieces found",
    no_products_desc: "Try searching for a different term or clear your category filter.",
    reset_filters: "Reset Filters",
    about_tag: "HERITAGE & ARTISTRY",
    about_title: "The Yova Collections Story",
    about_sub: "Dedicated to preserving the eternal grandeur of South Indian jewellery through authentic rolled gold craftsmanship.",
    about_sec1_h: "Royal Splendor Without Compromise",
    about_sec1_p1: "Welcome to Yova Collections. We were founded with a singular passion: to make royal, heritage-style Indian jewellery accessible, durable, and indistinguishable from solid 22k gold heirloom pieces.",
    about_sec1_p2: "For generations, traditional South Indian celebrations have called for ornate temple jewelry, grand Lakshmi harams, delicate gutpusalu pearl necklaces, and handcrafted peacock bangles. Real gold often carries astronomical expense and safety concerns during travels. Our specialized rolled gold jewellery and handmade rolled gold jewellery offer the perfect answer—magnificent, heavy, skin-friendly, and breathtakingly royal.",
    about_quote: "\"Our mission is to celebrate every woman's grace with jewellery that looks and feels like timeless gold.\"",
    about_pure_craft: "Handmade & Hand-Set Stones",
    know_the_craft: "KNOW THE CRAFT",
    what_is_title: "What is Rolled Gold Jewellery?",
    what_is_sub: "Understanding the technology and difference between normal imitation and genuine rolled gold.",
    comp_rolled_gold: "Yova Rolled Gold",
    comp_imitation: "Ordinary Imitation / One-Gram",
    c1_h: "Real Gold Layer:",
    c2_h: "Long-Lasting Radiance:",
    c3_h: "Authentic Weight & Feel:",
    c4_h: "Hypoallergenic:",
    care_tag: "MAINTENANCE GUIDE",
    care_title: "How to Care for Your Rolled Gold Pieces",
    care_1_h: "Keep Away from Moisture",
    care_1_p: "Remove before bathing, swimming, or rigorous workouts to keep the gold luster pristine.",
    care_2_h: "Wear After Perfumes",
    care_2_p: "Always apply hairspray, body lotions, and perfumes before putting on your jewellery.",
    care_3_h: "Store in Air-Tight Pouches",
    care_3_p: "Store each piece separately in zip-lock bags or soft velvet boxes to prevent friction scratches.",
    care_4_h: "Gentle Cleaning",
    care_4_p: "Wipe gently after wear with a soft dry cotton cloth before storing away.",
    gallery_tag: "VISUAL SHOWCASE",
    gallery_title: "Jewellery Gallery",
    gallery_sub: "Click any jewellery photograph to inspect high-definition details, craftsmanship, and order directly on WhatsApp.",
    cat_necklaces: "Necklaces & Harams",
    cat_bangles: "Kadas & Bangles",
    cat_earrings: "Antique Jhumkas",
    contact_tag: "GET IN TOUCH",
    contact_title: "Contact Yova Collections",
    contact_sub: "We are always delighted to help you choose the ideal jewellery for your special occasions.",
    direct_ordering: "Direct WhatsApp Ordering",
    direct_order_desc: "For immediate orders, live video previews, and customized enquiries, connect with us directly on WhatsApp or telephone.",
    whatsapp_orders: "WhatsApp Order Line",
    quick_response: "Tap to chat instantly",
    phone_support: "Phone Support",
    hours_sub: "Mon - Sun: 9:00 AM - 9:00 PM",
    insta_follow: "Follow for daily reels & stories",
    shipping_pan_india: "Shipping Coverage",
    pan_india_val: "All Over India",
    shipping_sub: "Secure tamper-proof insured courier",
    send_inquiry: "Send Custom Order Inquiry",
    form_desc: "Fill out your details to send a structured inquiry directly to our WhatsApp support team.",
    your_name: "Your Name *",
    phone_number: "Phone / WhatsApp Number *",
    city_state: "City & State *",
    interest_label: "Interested Jewellery Category",
    opt_handmade: "Handmade Rolled Gold",
    opt_necklaces: "Rolled Gold Necklaces & Harams",
    opt_bangles: "Antique Rolled Gold Bangles",
    opt_jhumkas: "Handcrafted Jhumkas & Earrings",
    opt_bridal: "Complete Bridal Jewellery Set",
    opt_custom: "Custom Design / Other Inquiry",
    your_message: "Your Requirement or Message",
    send_via_wa: "Send Inquiry on WhatsApp",
    faq_tag: "COMMON QUESTIONS",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How do I order on WhatsApp?",
    faq_a1: "Simply click on the 'Order on WhatsApp' button underneath any jewellery design or banner. A WhatsApp chat with our official number 9701959456 will open with the exact product details and price ready to send. We will confirm availability, provide live photos/video preview if requested, and provide payment details.",
    faq_q2: "What is the lifespan of Yova Collections rolled gold jewellery?",
    faq_a2: "With normal occasional wear (weddings, pujas, parties) and proper care (storing dry in air-tight pouches away from water and perfume), our rolled gold maintains its golden brilliance for years without discoloration.",
    faq_q3: "Can I request a live video call to inspect the jewelry?",
    faq_a3: "Yes! We understand that jewellery requires close visual inspection. Simply send us a message on WhatsApp (9701959456), and our team will gladly arrange a live video preview of the designs you love.",
    faq_q4: "What payment and delivery methods do you support?",
    faq_a4: "We accept UPI (Google Pay, PhonePe, Paytm), Bank IMPS/NEFT, and Cash on Delivery (selected locations). We ship pan-India via trusted express courier services with tracking provided.",
    footer_desc: "Premier South Indian destination for authentic rolled gold and artisanal handmade rolled gold jewellery. Timeless royal elegance crafted for modern celebrations.",
    quick_links: "Explore Pages",
    jewellery_categories: "Jewellery Categories",
    cat_handmade_rg: "Handmade Rolled Gold",
    cat_temple_neck: "Temple Harams & Chokers",
    cat_antique_kadas: "Antique Peacock Kadas",
    cat_kemp_jhumkas: "Kemp Jhumkas & Earrings",
    cat_bridal_rg: "Bridal Gutpusalu Sets",
    order_desk: "Direct Order Desk",
    whatsapp_order_no: "WhatsApp Order Number:",
    dispatch_coverage: "Delivery Coverage:",
    pan_india_text: "Pan-India Courier with Tracking",
    crafted_with_love: "Crafted with ♥ for timeless Indian royalty",
    order_this_piece_wa: "Order this Piece on WhatsApp",
    quick_view: "Quick View",
    wa_msg_template: "Hi Yova Collections, I would like to order: *{name}* (Price: ₹{price}). Please share availability and delivery details.",
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    cart: "Cart",
    shopping_cart: "Shopping Cart",
    cart_empty: "Your cart is empty",
    cart_empty_sub: "Explore our royal jewellery collection and add your favourite pieces!",
    subtotal: "Subtotal",
    total_amount: "Total Amount",
    proceed_checkout: "Proceed to Checkout",
    continue_shopping: "Continue Shopping",
    added_to_cart: "Added to Cart!",
    item_added_msg: "item has been added to your cart.",
    view_cart: "View Cart",
    remove: "Remove",
    qty: "Qty"
  },

  te: {
    announcement: "✨ ₹1,999 పైన ఆర్డర్లపై భారతదేశమంతటా ఉచిత డెలివరీ | నేరుగా WhatsApp లో ఆర్డర్ చేయండి",
    wa_helpline: "సహాయం: +91 9701959456",
    nav_home: "హోమ్",
    nav_products: "ఆభరణాలు",
    nav_about: "మా గురించి",
    nav_gallery: "గ్యాలరీ",
    nav_contact: "సంప్రదించండి",
    order_on_wa: "WhatsApp లో ఆర్డర్ చేయండి",
    order_on_wa_bubble: "WhatsApp లో ఆర్డర్",
    select_language: "భాష ఎంచుకోండి:",
    chat_on_wa: "WhatsApp లో చాట్ చేయండి (9701959456)",
    hero_badge: "మీ వెలుగు ధరించండి. ప్రతి క్షణాన్ని మీదిగా చేసుకోండి.",
    hero_title_1: "నిరంతరం వెలిగే",
    hero_title_2: "స్వచ్ఛమైన రోల్డ్ గోల్డ్",
    hero_desc: "అసలైన సౌత్ ఇండియన్ రోల్డ్ గోల్డ్ మరియు చేతితో చేసిన హ్యాండ్‌మేడ్ ఆభరణాల రాజసమైన అందాన్ని అనుభవించండి. 22 క్యారెట్ల అసలైన బంగారు నగలా కనిపించేలా నైపుణ్యంతో రూపొందించబడింది.",
    explore_collection: "కలెక్షన్ చూడండి",
    order_on_whatsapp: "WhatsApp ఆర్డర్",
    trust_quality: "100% గ్యారంటీ రోల్డ్ గోల్డ్",
    trust_handmade: "చేతితో చేసిన సున్నితమైన పనితనం",
    trust_shipping: "సురక్షితమైన డోర్‌స్టెప్ డెలివరీ",
    hero_badge_featured: "ప్రత్యేక పెళ్లిళ్ల కలెక్షన్",
    hero_badge_sub: "చేతితో చేసిన పురాతన కళాఖండం",
    pillar_1_title: "అసలైన రోల్డ్ గోల్డ్",
    pillar_1_desc: "మన్నికైన కోర్ లోహంతో బంధించబడిన మందపాటి బంగారు పూతతో దీర్ఘకాలిక మెరుపు మరియు చర్మ-స్నేహపూర్వక రక్షణ.",
    pillar_2_title: "నైపుణ్య కళాకారుల చేతిపని",
    pillar_2_desc: "ప్రతి నక్షి, నెమలి మరియు పూల డిజైన్లు నిపుణులైన సాంప్రదాయ కళాకారులచే సున్నితంగా చెక్కబడ్డాయి.",
    pillar_3_title: "తక్షణ WhatsApp ఆర్డర్లు",
    pillar_3_desc: "లైవ్ వీడియో కాల్ ద్వారా నగలను పరిశీలించి, సైజులు సరిచూసుకొని క్షణాల్లో ఆర్డర్ చేయవచ్చు.",
    pillar_4_title: "సరసమైన ధరలు",
    pillar_4_desc: "షోరూమ్ మధ్యవర్తులు లేకుండా నేరుగా కళాకారుల నుండి అత్యుత్తమ నాణ్యత గల ఆభరణాలు.",
    tag_curated: "విశేష సేకరణ",
    bestsellers_title: "మా అత్యంత ప్రజాదరణ పొందిన ఆభరణాలు",
    bestsellers_sub: "శుభకార్యాలు మరియు వేడుకల కోసం సాంప్రదాయ రాజసంతో రూపొందించిన అత్యుత్తమ నగల కలెక్షన్.",
    view_all_products: "మొత్తం నగల కేటలాగ్ చూడండి",
    the_yova_legacy: "యోవా కలెక్షన్స్ సాంప్రదాయం",
    spotlight_heading: "రోల్డ్ గోల్డ్ ఎందుకు సరైన ఆధునిక ఎంపిక?",
    spotlight_p1: "యోవా కలెక్షన్స్ వద్ద, మేము సాంప్రదాయ ఆలయ కళను ఆధునిక అందంతో మిళితం చేస్తాము. మా రోల్డ్ గోల్డ్ ఆభరణాలు అసలైన 22 క్యారెట్ల బంగారు మెరుపు మరియు బరువును అందిస్తాయి.",
    spotlight_p2: "సాధారణంగా త్వరగా రంగు మారే వన్-గ్రామ్ బంగారం కాకుండా, సరైన సంరక్షణతో మా రోల్డ్ గోల్డ్ నగలు సంవత్సరాల తరబడి కొత్తదనం కోల్పోవు.",
    handmade_purity: "చేతిపని నైపుణ్యం",
    feat_1: "22K అసలైన బంగారు రాయల్ లుక్",
    feat_2: "లెడ్ మరియు నికెల్ రహితం / సురక్షితం",
    feat_3: "WhatsApp లో లైవ్ వీడియో కాల్ ప్రివ్యూ",
    feat_4: "భారతదేశమంతటా వేగవంతమైన డెలివరీ",
    request_video_preview: "వీడియో కాల్ ప్రివ్యూ కోరండి",
    tag_reviews: "సంతృప్తి చెందిన కస్టమర్లు",
    reviews_title: "మా కస్టమర్ల అనుభవాలు",
    review_1_text: "\"రోల్డ్ గోల్డ్ లక్ష్మీ టెంపుల్ హారం అచ్చం 22 క్యారెట్ల బంగారు నగలలాగే ఉంది! పెళ్లిలో బంధువులంతా నిజమైన బంగారమే అనుకున్నారు. ధన్యవాదాలు Yova Collections!\"",
    review_2_text: "\"హ్యాండ్‌మేడ్ నెమలి కడాలు WhatsApp ద్వారా ఆర్డర్ చేశాను. వెంటనే స్పందించి క్లోజప్ వీడియోలు చూపించారు. 3 రోజుల్లోనే సురక్షితంగా వచ్చాయి.\"",
    review_3_text: "\"గుట్పూసల నెక్లెస్ క్వాలిటీ అద్భుతం! ముత్యాలు మరియు కెంపు రాళ్ల మెరుపు ఎంతో రిచ్‌గా ఉంది. ఒక క్లిక్‌తో WhatsApp లో ఆర్డర్ చేయడం చాలా సులభం.\"",
    follow_insta: "Instagram లో మాతో కలవండి",
    insta_desc: "రోజువారీ కొత్త డిజైన్లు, రీల్స్ మరియు అప్‌డేట్స్ కోసం @YovaCollections ను ఫాలో అవ్వండి.",
    catalog_tag: "పూర్తి కలెక్షన్",
    catalog_title: "రోల్డ్ గోల్డ్ & హ్యాండ్‌మేడ్ ఆభరణాలు",
    catalog_sub: "సౌత్ ఇండియన్ హారాలు, చోకర్లు, కంకణాలు మరియు పురాతన జుంకాల పూర్తి శ్రేణిని అన్వేషించండి.",
    filter_all: "అన్నీ",
    filter_handmade: "హ్యాండ్‌మేడ్ రోల్డ్ గోల్డ్",
    filter_rolled_gold: "క్లాసిక్ రోల్డ్ గోల్డ్",
    filter_necklaces: "నెక్లెస్‌లు & హారాలు",
    filter_bangles: "గాజులు & కడాలు",
    filter_earrings: "కమ్మలు & జుంకాలు",
    sort_by: "క్రమబద్ధీకరించు:",
    sort_featured: "ప్రత్యేకమైనవి & పాపులర్",
    sort_price_low: "ధర: తక్కువ నుండి ఎక్కువ",
    sort_price_high: "ధర: ఎక్కువ నుండి తక్కువ",
    sort_name: "పేరు (A - Z)",
    wa_notice: "💡 తక్షణ ధృవీకరణతో WhatsApp లో వేగవంతమైన ఆర్డర్",
    no_products_title: "ఆభరణాలు లభించలేదు",
    no_products_desc: "వేరే పదం ద్వారా శోధించండి లేదా ఫిల్టర్‌లను రీసెట్ చేయండి.",
    reset_filters: "ఫిల్టర్లు రీసెట్ చేయండి",
    about_tag: "వారసత్వం & కళానైపుణ్యం",
    about_title: "యోవా కలెక్షన్స్ కథ",
    about_sub: "అసలైన రోల్డ్ గోల్డ్ కళా నైపుణ్యంతో దక్షిణ భారత నగల శాశ్వత వైభవాన్ని అందించడమే మా సంకల్పం.",
    about_sec1_h: "రాజసమైన అందం - ఎలాంటి రాజీ లేకుండా",
    about_sec1_p1: "యోవా కలెక్షన్స్ కు స్వాగతం. నిజమైన 22 క్యారెట్ల బంగారు నగల వలె కనిపించే రాయల్ ఇండియన్ ఆభరణాలను అందరికీ అందుబాటులోకి తేవాలనే లక్ష్యంతో ప్రారంభించబడింది.",
    about_sec1_p2: "తరతరాలుగా తెలుగువారి పెళ్లిళ్లు మరియు పండుగలకు లక్ష్మీ హారాలు, గుట్పూసల ముత్యాల హారాలు, నెమలి గాజులు అత్యంత ముఖ్యం. మా రోల్డ్ గోల్డ్ ఆభరణాలు బరువుగా, మెరుస్తూ, చర్మానికి హాయిగా ఉండే అసలైన బంగారు అనుభూతిని ఇస్తాయి.",
    about_quote: "\"ప్రతి మహిళ అందాన్ని శాశ్వత బంగారు కాంతితో రెట్టింపు చేయడమే మా లక్ష్యం.\"",
    about_pure_craft: "100% చేతితో చేసిన స్టోన్ వర్క్",
    know_the_craft: "కళను తెలుసుకోండి",
    what_is_title: "రోల్డ్ గోల్డ్ అంటే ఏమిటి?",
    what_is_sub: "సాధారణ వన్-గ్రామ్ నకిలీ పూతకు మరియు నాణ్యమైన రోల్డ్ గోల్డ్‌కు ఉన్న వ్యత్యాసం.",
    comp_rolled_gold: "యోవా రోల్డ్ గోల్డ్",
    comp_imitation: "సాధారణ ఇమిటేషన్ / వన్-గ్రామ్",
    c1_h: "అసలైన బంగారు పొర:",
    c2_h: "దీర్ఘకాల మెరుపు:",
    c3_h: "నిజమైన బరువు & అనుభూతి:",
    c4_h: "చర్మ-స్నేహపూర్వక:",
    care_tag: "సంరక్షణ సూచనలు",
    care_title: "మీ రోల్డ్ గోల్డ్ నగలను ఎలా కాపాడుకోవాలి?",
    care_1_h: "తేమకు దూరంగా ఉంచండి",
    care_1_p: "స్నానం చేసేటప్పుడు లేదా వ్యాయామం చేసేటప్పుడు నగలను తీసివేయండి.",
    care_2_h: "పర్ఫ్యూమ్‌ల తర్వాత ధరించండి",
    care_2_p: "బాడీ లోషన్లు మరియు పెర్ఫ్యూమ్‌లు వేసుకున్న తర్వాతే నగలు ధరించాలి.",
    care_3_h: "గాలి చొరబడని పౌచ్‌లలో దాచండి",
    care_3_p: "జిప్‌లాక్ కవర్లలో విడివిడిగా భద్రపరచడం వల్ల గీతలు పడకుండా ఉంటాయి.",
    care_4_h: "మృదువైన వస్త్రంతో శుభ్రం చేయండి",
    care_4_p: "ఉపయోగించిన తర్వాత పొడి కాటన్ వస్త్రంతో తుడిచి భద్రపరచండి.",
    gallery_tag: "చిత్ర మాలిక",
    gallery_title: "నగల గ్యాలరీ",
    gallery_sub: "నగల హై-డెఫినిషన్ వివరాలను చూడటానికి ఫోటోపై క్లిక్ చేయండి మరియు WhatsApp లో ఆర్డర్ చేయండి.",
    cat_necklaces: "హారాలు & నెక్లెస్‌లు",
    cat_bangles: "కడాలు & గాజులు",
    cat_earrings: "పురాతన జుంకాలు",
    contact_tag: "సంప్రదించండి",
    contact_title: "యోవా కలెక్షన్స్ ను సంప్రదించండి",
    contact_sub: "మీ ప్రత్యేక వేడుకల కోసం సరైన ఆభరణాలను ఎంచుకోవడానికి మేము ఎల్లప్పుడూ సిద్ధంగా ఉన్నాము.",
    direct_ordering: "నేరుగా WhatsApp ఆర్డర్లు",
    direct_order_desc: "తక్షణ ఆర్డర్లు మరియు లైవ్ వీడియో ప్రివ్యూల కోసం నేరుగా WhatsApp లేదా ఫోన్ ద్వారా మమ్మల్ని సంప్రదించండి.",
    whatsapp_orders: "WhatsApp ఆర్డర్ నంబర్",
    quick_response: "చాట్ చేయడానికి క్లిక్ చేయండి",
    phone_support: "ఫోన్ సపోర్ట్",
    hours_sub: "సోమ - ఆది: ఉదయం 9:00 - రాత్రి 9:00",
    insta_follow: "రోజువారీ రీల్స్ కోసం ఫాలో అవ్వండి",
    shipping_pan_india: "డెలివరీ పరిధి",
    pan_india_val: "భారతదేశమంతటా",
    shipping_sub: "సురక్షిత కొరియర్ ట్రాకింగ్‌తో",
    send_inquiry: "కస్టమ్ ఆర్డర్ విచారణ పంపండి",
    form_desc: "మీ వివరాలను నమోదు చేసి నేరుగా మా WhatsApp సహాయక బృందానికి పంపండి.",
    your_name: "మీ పేరు *",
    phone_number: "ఫోన్ / WhatsApp నంబర్ *",
    city_state: "నగరం & రాష్ట్రం *",
    interest_label: "ఆసక్తి ఉన్న ఆభరణాల రకం",
    opt_handmade: "హ్యాండ్‌మేడ్ రోల్డ్ గోల్డ్",
    opt_necklaces: "రోల్డ్ గోల్డ్ నెక్లెస్‌లు & హారాలు",
    opt_bangles: "యాంటిక్ రోల్డ్ గోల్డ్ గాజులు",
    opt_jhumkas: "హ్యాండ్‌క్రాఫ్టెడ్ జుంకాలు & కమ్మలు",
    opt_bridal: "పూర్తి పెళ్లి నగల సెట్",
    opt_custom: "కస్టమ్ డిజైన్ / ఇతర విచారణ",
    your_message: "మీ సందేశం లేదా అవసరం",
    send_via_wa: "WhatsApp లో విచారణ పంపండి",
    faq_tag: "సాధారణ సందేహాలు",
    faq_title: "తరచుగా అడిగే ప్రశ్నలు",
    faq_q1: "WhatsApp లో ఎలా ఆర్డర్ చేయాలి?",
    faq_a1: "ఏదైనా ఆభరణం కింద ఉన్న 'WhatsApp లో ఆర్డర్ చేయండి' బటన్‌ను క్లిక్ చేయండి. మా నంబర్ 9701959456 తో చాట్ ఓపెన్ అవుతుంది. మేము లభ్యత మరియు చెల్లింపు వివరాలను వెంటనే అందిస్తాము.",
    faq_q2: "యోవా కలెక్షన్స్ రోల్డ్ గోల్డ్ ఎంతకాలం మన్నుతుంది?",
    faq_a2: "సరైన సంరక్షణతో (నీరు మరియు పెర్ఫ్యూమ్‌లకు దూరంగా గాలి చొరబడని పౌచ్‌లలో భద్రపరిస్తే), మా రోల్డ్ గోల్డ్ నగలు సంవత్సరాల తరబడి అసలైన మెరుపుతో ఉంటాయి.",
    faq_q3: "నగలను వీడియో కాల్ ద్వారా చూడవచ్చా?",
    faq_a3: "తప్పకుండా! మీరు ఎంచుకున్న డిజైన్లను WhatsApp (9701959456) వీడియో కాల్ ద్వారా స్పష్టంగా ప్రత్యక్షంగా చూడవచ్చు.",
    faq_q4: "చెల్లింపు మరియు డెలివరీ పద్ధతులు ఏమిటి?",
    faq_a4: "మేము UPI (Google Pay, PhonePe, Paytm), బ్యాంక్ బదిలీలను స్వీకరిస్తాము. భారతదేశమంతటా సురక్షిత కొరియర్ ద్వారా పంపుతాము.",
    footer_desc: "అసలైన రోల్డ్ గోల్డ్ మరియు హ్యాండ్‌మేడ్ ఆభరణాల కోసం ప్రముఖ దక్షిణ భారత గమ్యస్థానం. శుభకార్యాలకు శాశ్వత రాజసం.",
    quick_links: "ముఖ్యమైన పేజీలు",
    jewellery_categories: "నగల రకాలు",
    cat_handmade_rg: "హ్యాండ్‌మేడ్ రోల్డ్ గోల్డ్",
    cat_temple_neck: "టెంపుల్ హారాలు & చోకర్లు",
    cat_antique_kadas: "యాంటిక్ నెమలి కడాలు",
    cat_kemp_jhumkas: "కెంపు జుంకాలు",
    cat_bridal_rg: "పెళ్లి గుట్పూసల సెట్లు",
    order_desk: "ఆర్డర్ డెస్క్",
    whatsapp_order_no: "WhatsApp ఆర్డర్ నంబర్:",
    dispatch_coverage: "డెలివరీ పరిధి:",
    pan_india_text: "ట్రాకింగ్‌తో దేశవ్యాప్త కొరియర్",
    crafted_with_love: "భారతీయ సాంప్రదాయ రాయల్టీ కోసం ♥ తో రూపొందించబడింది",
    order_this_piece_wa: "ఈ ఆభరణాన్ని WhatsApp లో ఆర్డర్ చేయండి",
    quick_view: "వివరాలు చూడండి",
    wa_msg_template: "నమస్కారం Yova Collections, నేను *{name}* (ధర: ₹{price}) ఆర్డర్ చేయాలనుకుంటున్నాను. దయచేసి వివరాలు తెలియజేయండి.",
    add_to_cart: "\u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D\u200C\u0C15\u0C41 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C41",
    buy_now: "\u0C07\u0C2E\u0C4D\u0C2A\u0C41\u0C21\u0C47 \u0C15\u0C4A\u0C28\u0C02\u0C21\u0C3F",
    cart: "\u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D",
    shopping_cart: "\u0C37\u0C3E\u0C2A\u0C3F\u0C02\u0C17\u0C4D \u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D",
    cart_empty: "\u0C2E\u0C40 \u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D \u0C16\u0C3E\u0C33\u0C40\u0C17\u0C3E \u0C09\u0C02\u0C26\u0C3F",
    cart_empty_sub: "\u0C2E\u0C3E \u0C30\u0C3E\u0C1C\u0C15\u0C40\u0C2F \u0C28\u0C17\u0C32 \u0C38\u0C47\u0C15\u0C30\u0C23\u0C28\u0C41 \u0C05\u0C28\u0C4D\u0C35\u0C47\u0C37\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F.",
    subtotal: "\u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02",
    total_amount: "\u0C2E\u0C4A\u0C24\u0C4D\u0C24\u0C02 \u0C27\u0C30",
    proceed_checkout: "\u0C1A\u0C46\u0C15\u0C4C\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
    continue_shopping: "\u0C37\u0C3E\u0C2A\u0C3F\u0C02\u0C17\u0C4D \u0C15\u0C4A\u0C28\u0C3E\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    added_to_cart: "\u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D\u200C\u0C15\u0C41 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C2C\u0C01\u0C21\u0C3F\u0C02\u0C26\u0C3F!",
    item_added_msg: "\u0C06\u0C2D\u0C30\u0C23\u0C02 \u0C2E\u0C40 \u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D\u200C\u0C15\u0C41 \u0C1C\u0C4B\u0C21\u0C3F\u0C02\u0C1A\u0C2C\u0C01\u0C21\u0C3F\u0C02\u0C26\u0C3F.",
    view_cart: "\u0C15\u0C3E\u0C30\u0C4D\u0C1F\u0C4D \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F",
    remove: "\u0C24\u0C4A\u0C32\u0C17\u0C3F\u0C02\u0C1A\u0C41",
    qty: "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02"
  },

  hi: {
    announcement: "✨ ₹1,999 से अधिक के ऑर्डर पर पूरे भारत में मुफ़्त डिलीवरी | सीधे WhatsApp पर ऑर्डर करें",
    wa_helpline: "हेल्पलाइन: +91 9701959456",
    nav_home: "होम",
    nav_products: "ज्वेलरी",
    nav_about: "हमारे बारे में",
    nav_gallery: "गैलरी",
    nav_contact: "संपर्क करें",
    order_on_wa: "WhatsApp पर ऑर्डर करें",
    order_on_wa_bubble: "WhatsApp पर ऑर्डर",
    select_language: "भाषा चुनें:",
    chat_on_wa: "WhatsApp पर चैट करें (9701959456)",
    hero_badge: "अपनी चमक पहनें। हर पल को अपना बनाएं।",
    hero_title_1: "सदाबहार चमक",
    hero_title_2: "शुद्ध रोल्ड गोल्ड",
    hero_desc: "प्रामाणिक दक्षिण भारतीय रोल्ड गोल्ड और हस्तनिर्मित आभूषणों के शाही वैभव का अनुभव करें। 22 कैरेट असली सोने जैसा दिखने और महसूस होने वाला उत्कृष्ट आभूषण।",
    explore_collection: "कलेक्शन देखें",
    order_on_whatsapp: "WhatsApp ऑर्डर",
    trust_quality: "100% प्रामाणिक रोल्ड गोल्ड",
    trust_handmade: "हस्तनिर्मित कारीगरी",
    trust_shipping: "सुरक्षित होम डिलीवरी",
    hero_badge_featured: "विशेष ब्राइडल कलेक्शन",
    hero_badge_sub: "हस्तनिर्मित एंटीक मास्टरपीस",
    pillar_1_title: "प्रामाणिक रोल्ड गोल्ड",
    pillar_1_desc: "टिकाऊ धातु कोर पर मोटी सोने की परत जो लंबे समय तक चमक और त्वचा के अनुकूल सुरक्षा देती है।",
    pillar_2_title: "कुशल कारीगरों द्वारा निर्मित",
    pillar_2_desc: "प्रत्येक नक्काशी, मोर और फूलों की डिज़ाइन अनुभवी पारंपरिक कारीगरों द्वारा हाथ से बनाई गई है।",
    pillar_3_title: "तुरंत WhatsApp ऑर्डर",
    pillar_3_desc: "लाइव वीडियो कॉल पूर्वावलोकन, कस्टम साइज़ और तुरंत डिलीवरी के लिए हमारे विशेषज्ञों से सीधे चैट करें।",
    pillar_4_title: "पारदर्शी और वाजिब दाम",
    pillar_4_desc: "बिना किसी शोरूम कमीशन के सीधे कारीगर से ग्राहक तक शाही आभूषण।",
    tag_curated: "विशिष्ट संग्रह",
    bestsellers_title: "हमारे लोकप्रिय आभूषण",
    bestsellers_sub: "विवाह और शुभ उत्सवों के लिए पारंपरिक भव्यता और शाही आकर्षण से सजे आभूषण।",
    view_all_products: "संपूर्ण कैटलॉग देखें",
    the_yova_legacy: "योवा कलेक्शन्स की विरासत",
    spotlight_heading: "पारंपरिक रोल्ड गोल्ड क्यों है समझदार विलासिता?",
    spotlight_p1: "योवा कलेक्शन्स में, हम दक्षिण भारतीय मंदिर कला को आधुनिक सुंदरता के साथ जोड़ते हैं। हमारे रोल्ड गोल्ड आभूषण असली 22 कैरेट सोने की गर्माहट, चमक और वजन प्रदान करते हैं।",
    spotlight_p2: "साधारण एक-ग्राम सोने के विपरीत जो जल्दी फीका पड़ जाता है, हमारे रोल्ड गोल्ड आभूषण उचित देखभाल के साथ वर्षों तक चमकते रहते हैं।",
    handmade_purity: "हस्तनिर्मित कारीगरी",
    feat_1: "22K असली सोने जैसा लुक और अहसास",
    feat_2: "लेड और निकल मुक्त / सुरक्षित",
    feat_3: "WhatsApp पर लाइव वीडियो कॉल पूर्वावलोकन",
    feat_4: "अखिल भारतीय तेज़ और सुरक्षित शिपिंग",
    request_video_preview: "वीडियो कॉल का अनुरोध करें",
    tag_reviews: "प्रसन्न ग्राहक",
    reviews_title: "हमारे ग्राहकों के अनुभव",
    review_1_text: "\"लक्ष्मी मंदिर हार असली 22k सोने जैसा दिखता है! शादी में सभी को लगा कि यह ठोस सोना है। धन्यवाद Yova Collections!\"",
    review_2_text: "\"WhatsApp के जरिए हैंडमेड मोर कड़े मंगवाए। बहुत त्वरित प्रतिक्रिया मिली और 3 दिनों में सुरक्षित पैकिंग के साथ डिलीवरी हो गई।\"",
    review_3_text: "\"गुटपुसलु नेकलेस की गुणवत्ता बेहतरीन है! मोतियों और लाल पत्थरों की चमक बहुत शाही है। WhatsApp पर एक क्लिक में ऑर्डर करना बहुत आसान था।\"",
    follow_insta: "Instagram पर हमारे साथ जुड़ें",
    insta_desc: "नए डिज़ाइनों, रील्स और अपडेट्स के लिए @YovaCollections को फ़ॉलो करें।",
    catalog_tag: "पूर्ण संग्रह",
    catalog_title: "रोल्ड गोल्ड और हैंडमेड आभूषण",
    catalog_sub: "दक्षिण भारतीय हार, चोकर, कंगन और एंटीक झुमकों की संपूर्ण श्रृंखला देखें।",
    filter_all: "सभी आभूषण",
    filter_handmade: "हैंडमेड रोल्ड गोल्ड",
    filter_rolled_gold: "क्लासिक रोल्ड गोल्ड",
    filter_necklaces: "हार और चोकर",
    filter_bangles: "चूड़ियाँ और कड़े",
    filter_earrings: "झुमके और बालियाँ",
    sort_by: "क्रमबद्ध करें:",
    sort_featured: "विशेष और लोकप्रिय",
    sort_price_low: "कीमत: कम से अधिक",
    sort_price_high: "कीमत: अधिक से कम",
    sort_name: "नाम (A - Z)",
    wa_notice: "💡 तुरंत लाइव पुष्टि के साथ WhatsApp पर आसान ऑर्डर",
    no_products_title: "कोई आभूषण नहीं मिला",
    no_products_desc: "कृपया कोई अन्य शब्द खोजें या फ़िल्टर रीसेट करें।",
    reset_filters: "फ़िल्टर रीसेट करें",
    about_tag: "विरासत और शिल्प कौशल",
    about_title: "योवा कलेक्शन्स की कहानी",
    about_sub: "प्रामाणिक रोल्ड गोल्ड शिल्प कौशल के माध्यम से दक्षिण भारतीय आभूषणों की शाश्वत भव्यता को समर्पित।",
    about_sec1_h: "शाही सुंदरता - बिना किसी समझौते के",
    about_sec1_p1: "योवा कलेक्शन्स में आपका स्वागत है। हमारा उद्देश्य शाही भारतीय आभूषणों को सुलभ, टिकाऊ और असली 22 कैरेट सोने जैसा बनाना है।",
    about_sec1_p2: "दक्षिण भारतीय उत्सवों में भव्य मंदिर आभूषण, लक्ष्मी हार, गुटपुसलु मोती हार और मोर कड़े सबसे प्रिय होते हैं। हमारे रोल्ड गोल्ड और हैंडमेड आभूषण भारी, चमकदार और त्वचा के अनुकूल होते हैं।",
    about_quote: "\"हमारा उद्देश्य हर महिला के सौंदर्य को सोने की सदाबहार चमक से संवारना है।\"",
    about_pure_craft: "100% हाथ से जड़े गए पत्थर",
    know_the_craft: "कारीगरी को समझें",
    what_is_title: "रोल्ड गोल्ड आभूषण क्या है?",
    what_is_sub: "साधारण इमिटेशन और असली रोल्ड गोल्ड के बीच का अंतर जानें।",
    comp_rolled_gold: "योवा रोल्ड गोल्ड",
    comp_imitation: "साधारण इमिटेशन / वन-ग्राम",
    c1_h: "असली सोने की परत:",
    c2_h: "दीर्घकालिक चमक:",
    c3_h: "असली वजन और अहसास:",
    c4_h: "त्वचा के लिए सुरक्षित:",
    care_tag: "देखभाल गाइड",
    care_title: "अपने रोल्ड गोल्ड आभूषणों की देखभाल कैसे करें?",
    care_1_h: "नमी और पानी से दूर रखें",
    care_1_p: "सोने की चमक बनाए रखने के लिए नहाते या तैरते समय आभूषण उतार दें।",
    care_2_h: "परफ्यूम के बाद पहनें",
    care_2_p: "हमेशा लोशन और परफ्यूम लगाने के बाद ही आभूषण पहनें।",
    care_3_h: "एयर-टाइट पाउच में रखें",
    care_3_p: "खरोंच से बचाने के लिए प्रत्येक पीस को ज़िप-लॉक बैग या मखमल के डिब्बे में रखें।",
    care_4_h: "मुलायम कपड़े से पोंछें",
    care_4_p: "पहनने के बाद सूखे सूती कपड़े से पोंछकर ही डिब्बे में रखें।",
    gallery_tag: "विज़ुअल गैलरी",
    gallery_title: "आभूषण गैलरी",
    gallery_sub: "बारीक विवरण देखने के लिए किसी भी फ़ोटो पर क्लिक करें और सीधे WhatsApp पर ऑर्डर करें।",
    cat_necklaces: "हार और चोकर",
    cat_bangles: "कड़े और चूड़ियाँ",
    cat_earrings: "एंटीक झुमके",
    contact_tag: "संपर्क करें",
    contact_title: "योवा कलेक्शन्स से संपर्क करें",
    contact_sub: "हम आपके विशेष अवसरों के लिए आदर्श आभूषण चुनने में आपकी सहायता के लिए सदैव तत्पर हैं।",
    direct_ordering: "सीधे WhatsApp पर ऑर्डर करें",
    direct_order_desc: "तुरंत ऑर्डर और लाइव वीडियो कॉल के लिए सीधे WhatsApp या फ़ोन पर हमसे संपर्क करें।",
    whatsapp_orders: "WhatsApp ऑर्डर नंबर",
    quick_response: "तुरंत चैट करने के लिए टैप करें",
    phone_support: "फ़ोन सहायता",
    hours_sub: "सोम - रवि: सुबह 9:00 - रात 9:00",
    insta_follow: "दैनिक रील्स और स्टोरीज़ के लिए फ़ॉलो करें",
    shipping_pan_india: "डिलीवरी कवरेज",
    pan_india_val: "पूरे भारत में",
    shipping_sub: "सुरक्षित पार्सल ट्रैकिंग के साथ",
    send_inquiry: "कस्टम ऑर्डर पूछताछ भेजें",
    form_desc: "सीधे हमारी WhatsApp सहायता टीम को संदेश भेजने के लिए अपना विवरण भरें।",
    your_name: "आपका नाम *",
    phone_number: "फ़ोन / WhatsApp नंबर *",
    city_state: "शहर और राज्य *",
    interest_label: "रुचि की श्रेणी",
    opt_handmade: "हैंडमेड रोल्ड गोल्ड",
    opt_necklaces: "रोल्ड गोल्ड हार और चोकर",
    opt_bangles: "एंटीक रोल्ड गोल्ड चूड़ियाँ",
    opt_jhumkas: "हस्तनिर्मित झुमके और बालियाँ",
    opt_bridal: "संपूर्ण ब्राइडल ज्वेलरी सेट",
    opt_custom: "कस्टम डिज़ाइन / अन्य पूछताछ",
    your_message: "आपकी आवश्यकता या संदेश",
    send_via_wa: "WhatsApp पर पूछताछ भेजें",
    faq_tag: "अक्सर पूछे जाने वाले प्रश्न",
    faq_title: "महत्वपूर्ण प्रश्न और उत्तर",
    faq_q1: "WhatsApp पर ऑर्डर कैसे करें?",
    faq_a1: "किसी भी आभूषण के नीचे 'WhatsApp पर ऑर्डर करें' बटन पर क्लिक करें। हमारे नंबर 9701959456 पर उत्पाद विवरण के साथ चैट खुल जाएगी। हम तुरंत उपलब्धता और भुगतान विवरण देंगे।",
    faq_q2: "योवा कलेक्शन्स रोल्ड गोल्ड आभूषण कितने समय तक चलते हैं?",
    faq_a2: "उचित देखभाल के साथ (पानी और परफ्यूम से दूर एयर-टाइट पाउच में रखने पर), हमारे रोल्ड गोल्ड आभूषण वर्षों तक नए जैसे चमकते रहते हैं।",
    faq_q3: "क्या मैं वीडियो कॉल पर आभूषण देख सकता/सकती हूँ?",
    faq_a3: "हाँ, बिल्कुल! WhatsApp (9701959456) पर संदेश भेजकर आप अपनी पसंद के डिज़ाइनों का लाइव वीडियो कॉल पूर्वावलोकन देख सकते हैं।",
    faq_q4: "भुगतान और डिलीवरी के तरीके क्या हैं?",
    faq_a4: "हम UPI (Google Pay, PhonePe, Paytm) और बैंक ट्रांसफर स्वीकार करते हैं। हम पूरे भारत में भरोसेमंद एक्सप्रेस कूरियर से डिलीवरी करते हैं।",
    footer_desc: "प्रामाणिक रोल्ड गोल्ड और हस्तनिर्मित आभूषणों के लिए प्रमुख दक्षिण भारतीय ब्रांड। शुभ अवसरों के लिए सदाबहार शाही सुंदरता।",
    quick_links: "महत्वपूर्ण लिंक",
    jewellery_categories: "आभूषण श्रेणियाँ",
    cat_handmade_rg: "हैंडमेड रोल्ड गोल्ड",
    cat_temple_neck: "मंदिर हार और चोकर",
    cat_antique_kadas: "एंटीक मोर कड़े",
    cat_kemp_jhumkas: "केंपु झुमके",
    cat_bridal_rg: "ब्राइडल गुटपुसलु सेट",
    order_desk: "ऑर्डर डेस्क",
    whatsapp_order_no: "WhatsApp ऑर्डर नंबर:",
    dispatch_coverage: "डिलीवरी कवरेज:",
    pan_india_text: "ट्रैकिंग के साथ अखिल भारतीय कूरियर",
    crafted_with_love: "शाही भारतीय परंपरा के लिए ♥ से निर्मित",
    order_this_piece_wa: "इस आभूषण को WhatsApp पर ऑर्डर करें",
    quick_view: "विवरण देखें",
    wa_msg_template: "नमस्ते Yova Collections, मैं *{name}* (मूल्य: ₹{price}) ऑर्डर करना चाहता/चाहती हूँ। कृपया विवरण साझा करें।",
    add_to_cart: "\u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902",
    buy_now: "\u0905\u092D\u0940 \u0916\u0930\u0940\u0926\u0947\u0902",
    cart: "\u0915\u093E\u0930\u094D\u091F",
    shopping_cart: "\u0936\u094C\u092A\u093F\u0902\u0917 \u0915\u093E\u0930\u094D\u091F",
    cart_empty: "\u0906\u092A\u0915\u0940 \u0915\u093E\u0930\u094D\u091F \u0916\u093E\u0932\u0940 \u0939\u0948",
    cart_empty_sub: "\u0939\u092E\u093E\u0930\u0947 \u0936\u093E\u0939\u0940 \u0906\u092D\u0942\u0937\u0923 \u0938\u0902\u0917\u094D\u0930\u0939 \u0926\u0947\u0916\u0947\u0902 \u0914\u0930 \u0905\u092A\u0928\u0940 \u092A\u0938\u0902\u0926\u0940\u0926\u093E \u091A\u0940\u091C\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902।",
    subtotal: "\u0909\u092A-\u0915\u0941\u0932",
    total_amount: "\u0915\u0941\u0932 \u0930\u093E\u0936\u093F",
    proceed_checkout: "\u091A\u0946\u0915\u0960\u0906\u0909\u091F \u0915\u0930\u0947\u0902",
    continue_shopping: "\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
    added_to_cart: "\u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E!",
    item_added_msg: "\u0906\u092D\u0942\u0937\u0923 \u0906\u092A\u0915\u0940 \u0915\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u091C\u094B\u0921\u093C \u0926\u093F\u092F\u093E \u0917\u092F\u093E \u0939\u0948।",
    view_cart: "\u0915\u093E\u0930\u094D\u091F \u0926\u0947\u0916\u0947\u0902",
    remove: "\u0939\u091F\u093E\u090F\u0902",
    qty: "\u092E\u093E\u0924\u094D\u0930\u093E"
  },

  ta: {
    announcement: "✨ ₹1,999க்கு மேற்பட்ட ஆர்டர்களுக்கு இலவச டெலிவரி | WhatsApp மூலம் ஆர்டர் செய்யவும்",
    wa_helpline: "உதவி: +91 9701959456",
    nav_home: "முகப்பு",
    nav_products: "ஆபரணங்கள்",
    nav_about: "எங்களைப் பற்றி",
    nav_gallery: "கேலரி",
    nav_contact: "தொடர்புகொள்ள",
    order_on_wa: "WhatsApp-இல் ஆர்டர்",
    order_on_wa_bubble: "WhatsApp ஆர்டர்",
    select_language: "மொழி தேர்ந்தெடுக்கவும்:",
    chat_on_wa: "WhatsApp-இல் அரட்டை (9701959456)",
    hero_badge: "பிரீமியம் தங்க ஃபினிஷ்",
    hero_title_1: "அழகான ஆபரணங்கள்",
    hero_title_2: "அனைத்து விசேஷங்களுக்கும்",
    hero_desc: "நீடித்த பளபளப்பு மற்றும் தினமும் அணிய வசதியான பாரம்பரிய ரோல்டு கோல்ட் நகை சேகரிப்புகள்.",
    explore_collection: "சேகரிப்பைப் பாருங்கள்",
    order_on_whatsapp: "WhatsApp ஆர்டர்",
    add_to_cart: "கார்ட்டில் சேர்க்கவும்",
    buy_now: "இப்போதே வாங்கவும்",
    cart: "கார்ட்",
    shopping_cart: "ஷாப்பிங் கார்ட்",
    cart_empty: "உங்கள் கார்ட் காலியாக உள்ளது",
    cart_empty_sub: "எங்கள் அரச நகை சேகரிப்புகளைப் பார்த்து உங்களுக்குப் பிடித்தவற்றைச் சேர்க்கவும்.",
    subtotal: "மொத்தம்",
    total_amount: "மொத்தத் தொகை",
    proceed_checkout: "செக்அவுட் செய்ய தொடரவும்",
    continue_shopping: "ஷாப்பிங் தொடரவும்",
    added_to_cart: "கார்ட்டில் சேர்க்கப்பட்டது!",
    view_cart: "கார்ட்டைப் பார்க்கவும்",
    remove: "நீக்கு",
    qty: "அளவு",
    cat_necklaces: "ஆரங்கள் & சோக்கர்",
    cat_bangles: "வளையல்கள் & கடாக்கள்",
    cat_earrings: "ஆண்டிக் ஜிமிக்கி"
  },

  kn: {
    announcement: "✨ ₹1,999 ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಆರ್ಡರ್‌ಗಳಿಗೆ ಉಚಿತ ಡೆಲಿವರಿ | ನೇರವಾಗಿ WhatsApp ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
    wa_helpline: "ಸಹಾಯವಾಣಿ: +91 9701959456",
    nav_home: "ಹೋಮ್",
    nav_products: "ಆಭರಣಗಳು",
    nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
    nav_gallery: "ಗ್ಯಾಲರಿ",
    nav_contact: "ಸಂಪರ್ಕಿಸಿ",
    order_on_wa: "WhatsApp ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
    order_on_wa_bubble: "WhatsApp ಆರ್ಡರ್",
    select_language: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ:",
    chat_on_wa: "WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ (9701959456)",
    hero_badge: "ಪ್ರೀಮಿಯಂ ಗೋಲ್ಡ್ ಫಿನಿಶ್",
    hero_title_1: "ಸುಂದರವಾದ ಆಭರಣಗಳು",
    hero_title_2: "ಪ್ರತಿಯೊಂದು ಶುಭ ಸಮಾರಂಭಕ್ಕೆ",
    hero_desc: "ದೀರ್ಘಕಾಲಿಕ ಹೊಳಪು ಮತ್ತು ದೈನಂದಿನ ಧರಿಸಲು ಅನುಕೂಲಕರವಾದ ರಾಯಲ್ ರೋಲ್ಡ್ ಗೋಲ್ಡ್ ಆಭರಣಗಳು.",
    explore_collection: "ಆಭರಣ ಸಂಗ್ರಹ ನೋಡಿ",
    order_on_whatsapp: "WhatsApp ಆರ್ಡರ್",
    add_to_cart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
    buy_now: "ಈಗಲೇ ಖರೀದಿಸಿ",
    cart: "ಕಾರ್ಟ್",
    shopping_cart: "ಶಾಪಿಂಗ್ ಕಾರ್ಟ್",
    cart_empty: "ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
    cart_empty_sub: "ನಮ್ಮ ರಾಯಲ್ ಆಭರಣ ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ನೆಚ್ಚಿನವುಗಳನ್ನು ಸೇರಿಸಿ.",
    subtotal: "ಒಟ್ಟು",
    total_amount: "ಒಟ್ಟು ಮೊತ್ತ",
    proceed_checkout: "ಚೆಕ್‌ಔಟ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ",
    continue_shopping: "ಶಾಪಿಂಗ್ ಮುಂದುವರಿಸಿ",
    added_to_cart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!",
    view_cart: "ಕಾರ್ಟ್ ನೋಡಿ",
    remove: "ತೆಗೆದುಹಾಕಿ",
    qty: "ಪ್ರಮಾಣ",
    cat_necklaces: "ಹಾರಗಳು & ಚೋಕರ್",
    cat_bangles: "ಬಳೆಗಳು & ಕಡಾಗಳು",
    cat_earrings: "ಆಂಟಿಕ್ ಜುಮುಕಿ"
  },

  ml: {
    announcement: "✨ ₹1,999-ന് മുകളിലുള്ള ഓർഡറുകൾക്ക് സൗജന്യ ഡെലിവറി | direct WhatsApp ഓർഡറിംഗ് ലഭ്യമാണ്",
    wa_helpline: "ഹെൽപ്പ് ലൈൻ: +91 9701959456",
    nav_home: "ഹോം",
    nav_products: "ആഭരണങ്ങൾ",
    nav_about: "ഞങ്ങളെ കുറിച്ച്",
    nav_gallery: "ഗാലറി",
    nav_contact: "ബന്ധപ്പെടുക",
    order_on_wa: "WhatsApp-ൽ ഓർഡർ ചെയ്യുക",
    order_on_wa_bubble: "WhatsApp ഓർഡർ",
    select_language: "ഭാഷ തിരഞ്ഞെടുക്കുക:",
    chat_on_wa: "WhatsApp-ൽ ചാറ്റ് ചെയ്യുക (9701959456)",
    hero_badge: "പ്രീമിയം ഗോൾഡ് ഫിനിഷ്",
    hero_title_1: "മനോഹരമായ ആഭരണങ്ങൾ",
    hero_title_2: "എല്ലാ വിശേഷങ്ങൾക്കും",
    hero_desc: "ദീർഘനാൾ ഈടുനിൽക്കുന്ന തിളക്കവും ദിവസേന ധരിക്കാൻ സുഖകരവുമായ റോൾഡ് ഗോൾഡ് ആഭരണങ്ങൾ.",
    explore_collection: "ശേഖരം കാണുക",
    order_on_whatsapp: "WhatsApp ഓർഡർ",
    add_to_cart: "കാർട്ടിലേക്ക് ചേർക്കുക",
    buy_now: "ഇപ്പോൾ വാങ്ങുക",
    cart: "കാർട്ട്",
    shopping_cart: "ഷോപ്പിംഗ് കാർട്ട്",
    cart_empty: "നിങ്ങളുടെ കാർട്ട് ശൂന്യമാണ്",
    cart_empty_sub: "ഞങ്ങളുടെ റോയൽ ജ്വല്ലറി കളക്ഷൻ പരിശോധിച്ച് പ്രിയപ്പെട്ടവ ചേർക്കുക.",
    subtotal: "ആകെ",
    total_amount: "ആകെ തുക",
    proceed_checkout: "ചെക്ക്ഔട്ട് ചെയ്യുക",
    continue_shopping: "ഷോപ്പിംഗ് തുടരുക",
    added_to_cart: "കാർട്ടിലേക്ക് ചേർത്തു!",
    view_cart: "കാർട്ട് കാണുക",
    remove: "നീക്കം ചെയ്യുക",
    qty: "അളവ്",
    cat_necklaces: "മാലകളും ചോക്കറുകളും",
    cat_bangles: "വളകളും കടകളും",
    cat_earrings: "ആന്റിക് ജിമുക്കി"
  },

  es: {
    announcement: "✨ Envío gratis en pedidos superiores a ₹1,999 | Pedidos directos por WhatsApp",
    wa_helpline: "Asistencia: +91 9701959456",
    nav_home: "Inicio",
    nav_products: "Productos",
    nav_about: "Nosotros",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    order_on_wa: "Pedir por WhatsApp",
    order_on_wa_bubble: "Pedir por WhatsApp",
    select_language: "Seleccionar idioma:",
    chat_on_wa: "Chatear en WhatsApp (9701959456)",
    hero_badge: "Acabado en Oro Premium",
    hero_title_1: "Hermosas Joyas para",
    hero_title_2: "Cada Ocasión",
    hero_desc: "Elegante joyería de oro laminado con brillo duradero y comodidad para el uso diario.",
    explore_collection: "Explorar Colección",
    order_on_whatsapp: "Pedido WhatsApp",
    add_to_cart: "Añadir al Carrito",
    buy_now: "Comprar Ahora",
    cart: "Carrito",
    shopping_cart: "Carrito de Compras",
    cart_empty: "Tu carrito está vacío",
    cart_empty_sub: "Descubre nuestra colección real de joyas y añade tus piezas favoritas.",
    subtotal: "Subtotal",
    total_amount: "Monto Total",
    proceed_checkout: "Proceder al Pago",
    continue_shopping: "Seguir Comprando",
    added_to_cart: "¡Añadido al Carrito!",
    view_cart: "Ver Carrito",
    remove: "Eliminar",
    qty: "Cant",
    cat_necklaces: "Collares y Gargantillas",
    cat_bangles: "Pulseras y Brazaletes",
    cat_earrings: "Pendientes Antiguos"
  },

  fr: {
    announcement: "✨ Livraison gratuite pour toute commande sup. à ₹1 999 | Commandes WhatsApp directes",
    wa_helpline: "Assistance: +91 9701959456",
    nav_home: "Accueil",
    nav_products: "Bijoux",
    nav_about: "À propos",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    order_on_wa: "Commander sur WhatsApp",
    order_on_wa_bubble: "Commander sur WhatsApp",
    select_language: "Choisir la langue:",
    chat_on_wa: "Discuter sur WhatsApp (9701959456)",
    hero_badge: "Finition Or Premium",
    hero_title_1: "De Superbes Bijoux pour",
    hero_title_2: "Chaque Occasion",
    hero_desc: "Bijoux élégants en plaqué or avec éclat durable et confort au quotidien.",
    explore_collection: "Explorer la Collection",
    order_on_whatsapp: "Commande WhatsApp",
    add_to_cart: "Ajouter au Panier",
    buy_now: "Acheter Maintenant",
    cart: "Panier",
    shopping_cart: "Panier d'Achat",
    cart_empty: "Votre panier est vide",
    cart_empty_sub: "Découvrez notre collection royale et ajoutez vos bijoux préférés.",
    subtotal: "Sous-total",
    total_amount: "Montant Total",
    proceed_checkout: "Passer la Commande",
    continue_shopping: "Continuer les Achats",
    added_to_cart: "Ajouté au Panier!",
    view_cart: "Voir le Panier",
    remove: "Supprimer",
    qty: "Qté",
    cat_necklaces: "Colliers & Chokers",
    cat_bangles: "Bracelets & Kadas",
    cat_earrings: "Boucles d'Oreilles Antiques"
  },

  de: {
    announcement: "✨ Kostenloser Versand ab ₹1.999 | Direkte WhatsApp-Bestellung möglich",
    wa_helpline: "Helpline: +91 9701959456",
    nav_home: "Startseite",
    nav_products: "Schmuck",
    nav_about: "Über Uns",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",
    order_on_wa: "Über WhatsApp bestellen",
    order_on_wa_bubble: "WhatsApp-Bestellung",
    select_language: "Sprache wählen:",
    chat_on_wa: "Auf WhatsApp chatten (9701959456)",
    hero_badge: "Premium-Gold-Finish",
    hero_title_1: "Wunderschöner Schmuck für",
    hero_title_2: "Jeden Anlass",
    hero_desc: "Eleganter Dublee-Goldschmuck mit langanhaltendem Glanz und hohem Tragekomfort.",
    explore_collection: "Kollektion Entdecken",
    order_on_whatsapp: "WhatsApp-Bestellung",
    add_to_cart: "In den Warenkorb",
    buy_now: "Jetzt Kaufen",
    cart: "Warenkorb",
    shopping_cart: "Einkaufswagen",
    cart_empty: "Ihr Warenkorb ist leer",
    cart_empty_sub: "Entdecken Sie unsere königliche Schmuckkollektion und fügen Sie Lieblingsstücke hinzu.",
    subtotal: "Zwischensumme",
    total_amount: "Gesamtsumme",
    proceed_checkout: "Zur Kasse Gehen",
    continue_shopping: "Weiter Einkaufen",
    added_to_cart: "Hinzugefügt!",
    view_cart: "Warenkorb Ansehen",
    remove: "Entfernen",
    qty: "Menge",
    cat_necklaces: "Halsketten & Choker",
    cat_bangles: "Armreifen & Kadas",
    cat_earrings: "Antike Ohrringe"
  },

  ar: {
    announcement: "✨ توصيل مجاني للطلبات الأكبر من 1,999 روبية | طلب مباشر عبر واتساب",
    wa_helpline: "خط المساعدة: +91 9701959456",
    nav_home: "الرئيسية",
    nav_products: "المجوهرات",
    nav_about: "من نحن",
    nav_gallery: "المعرض",
    nav_contact: "اتصل بنا",
    order_on_wa: "اطلب عبر واتساب",
    order_on_wa_bubble: "طلب واتساب",
    select_language: "اختر اللغة:",
    chat_on_wa: "تحدث عبر واتساب (9701959456)",
    hero_badge: "طلاء ذهبي فاخر",
    hero_title_1: "مجوهرات أنيقة لكل",
    hero_title_2: "المناسبات السعيدة",
    hero_desc: "مجوهرات الذهب المغلف الأنيقة بلمعان يدوم ومريحة للاستخدام اليومي.",
    explore_collection: "استكشف المجموعة",
    order_on_whatsapp: "طلب واتساب",
    add_to_cart: "أضف إلى السلة",
    buy_now: "اشتر الآن",
    cart: "السلة",
    shopping_cart: "سلة التسوق",
    cart_empty: "سلة التسوق فارغة",
    cart_empty_sub: "استكشف تشكيلة مجوهراتنا الملكية وأضف قطعك المفضلة.",
    subtotal: "المجموع الفرعي",
    total_amount: "المبلغ الإجمالي",
    proceed_checkout: "متابعة الشراء",
    continue_shopping: "متابعة التسوق",
    added_to_cart: "تمت الإضافة إلى السلة!",
    view_cart: "عرض السلة",
    remove: "حذف",
    qty: "الكمية",
    cat_necklaces: "قلائد وتشوفكر",
    cat_bangles: "أساور وبانجلس",
    cat_earrings: "أقراط أثريّة"
  },

  zh: {
    announcement: "✨ 满 ₹1,999 免费全印度送货 | 支持 WhatsApp 直接下单",
    wa_helpline: "服务热线: +91 9701959456",
    nav_home: "首页",
    nav_products: "珠宝饰品",
    nav_about: "关于我们",
    nav_gallery: "图库展厅",
    nav_contact: "联系我们",
    order_on_wa: "通过 WhatsApp 下单",
    order_on_wa_bubble: "WhatsApp 下单",
    select_language: "选择语言:",
    chat_on_wa: "WhatsApp 咨询 (9701959456)",
    hero_badge: "臻选高级包金工艺",
    hero_title_1: "华丽典雅珠宝",
    hero_title_2: "适配盛宴与日常",
    hero_desc: "传统精工包金首饰，光泽持久，佩戴舒适，彰显尊贵质感。",
    explore_collection: "探索产品系列",
    order_on_whatsapp: "WhatsApp 订购",
    add_to_cart: "加入购物车",
    buy_now: "立即购买",
    cart: "购物车",
    shopping_cart: "我的购物车",
    cart_empty: "您的购物车暂无商品",
    cart_empty_sub: "探索我们的皇家珠宝系列，挑选您心仪的臻品。",
    subtotal: "小计",
    total_amount: "总计金额",
    proceed_checkout: "前往结算",
    continue_shopping: "继续选购",
    added_to_cart: "已加入购物车！",
    view_cart: "查看购物车",
    remove: "删除",
    qty: "数量",
    cat_necklaces: "项链与短项链",
    cat_bangles: "手镯与手链",
    cat_earrings: "复古耳环"
  },

  ja: {
    announcement: "✨ ₹1,999以上のご注文でインド全域送料無料 | WhatsApp直接注文可能",
    wa_helpline: "ヘルプライン: +91 9701959456",
    nav_home: "ホーム",
    nav_products: "ジュエリー",
    nav_about: "ブランドについて",
    nav_gallery: "ギャラリー",
    nav_contact: "お問い合わせ",
    order_on_wa: "WhatsAppで注文",
    order_on_wa_bubble: "WhatsApp注文",
    select_language: "言語を選択:",
    chat_on_wa: "WhatsAppで相談 (9701959456)",
    hero_badge: "プレミアムゴールド仕上げ",
    hero_title_1: "あらゆる場面を彩る",
    hero_title_2: "美しいジュエリー",
    hero_desc: "長持ちする輝きと日常使いの快適さを兼ね備えた上品なロールゴールドジュエリー。",
    explore_collection: "コレクションを見る",
    order_on_whatsapp: "WhatsApp注文",
    add_to_cart: "カートに追加",
    buy_now: "今すぐ購入",
    cart: "カート",
    shopping_cart: "ショッピングカート",
    cart_empty: "カートは空です",
    cart_empty_sub: "ロイヤルジュエリーコレクションを探索して、お気に入りを追加してください。",
    subtotal: "小計",
    total_amount: "合計金額",
    proceed_checkout: "レジに進む",
    continue_shopping: "ショッピングを続ける",
    added_to_cart: "カートに追加しました！",
    view_cart: "カートを見る",
    remove: "削除",
    qty: "数量",
    cat_necklaces: "ネックレス＆チョーカー",
    cat_bangles: "バングル＆カダ",
    cat_earrings: "アンティークイヤリング"
  }
};

// ==========================================
// 2. PRODUCT CATALOG DATA
// ==========================================
const productsData = [
  {
    id: "p1",
    name: {
      en: "Lakshmi Temple Rolled Gold Haram",
      te: "శ్రీ లక్ష్మీ టెంపుల్ రోల్డ్ గోల్డ్ హారం",
      hi: "श्री लक्ष्मी मंदिर रोल्ड गोल्ड हार"
    },
    category: "necklaces",
    type: "rolled-gold",
    badge: {
      en: "Bestseller",
      te: "బెస్ట్ సెల్లర్",
      hi: "बेस्टसेलर"
    },
    isHandmade: false,
    price: 3499,
    originalPrice: 5499,
    image: "images/temple_haram_premium.jpg",
    description: {
      en: "Royal South Indian Goddess Lakshmi temple haram necklace crafted with genuine rolled gold micro-plating, kemp rubies, emerald stones, and cascading pearl drops. Perfect for weddings and grand festivals.",
      te: "అసలైన రోల్డ్ గోల్డ్ పూత, కెంపు రాళ్లు, పచ్చలు మరియు ముత్యాల చుక్కలతో రూపొందించబడిన శ్రీ మహాలక్ష్మి దేవతా టెంపుల్ హారం. వివాహాలు మరియు శుభకార్యాలకు అత్యద్భుతం.",
      hi: "देवी महालक्ष्मी मंदिर नक्काशी वाला दक्षिण भारतीय रोल्ड गोल्ड हार, केंपु माणिक, पन्ना और प्राकृतिक मोतियों के साथ। विवाह और त्योहारों के लिए अत्यंत भव्य।"
    },
    specs: {
      en: { "Material": "22K Micro Rolled Gold", "Base Metal": "Pure Brass Alloy", "Stones": "Kemp Rubies & Pearls", "Finish": "Antique Matte Gold" },
      te: { "పదార్థం": "22K మైక్రో రోల్డ్ గోల్డ్", "బేస్ మెటల్": "స్వచ్ఛమైన ఇత్తడి మిశ్రమం", "రాళ్లు": "కెంపులు & ముత్యాలు", "ఫినిషింగ్": "యాంటిక్ మ్యాట్ గోల్డ్" },
      hi: { "सामग्री": "22K माइक्रो रोल्ड गोल्ड", "आधार धातु": "शुद्ध पीतल मिश्र धातु", "पत्थर": "केंपु माणिक और मोती", "फिनिश": "एंटीक मैट गोल्ड" }
    }
  },
  {
    id: "p2",
    name: {
      en: "Handmade Peacock Antique Kadas (Pair)",
      te: "హ్యాండ్‌మేడ్ నెమలి యాంటిక్ కడాలు (జత)",
      hi: "हैंडमेड मोर एंटीक कड़े (जोड़ी)"
    },
    category: "bangles",
    type: "handmade",
    badge: {
      en: "Handmade",
      te: "చేతిపని",
      hi: "हस्तनिर्मित"
    },
    isHandmade: true,
    price: 2199,
    originalPrice: 3799,
    image: "images/handmade_kadas.jpg",
    description: {
      en: "Pair of artisanal handmade rolled gold bangles featuring intricately carved 3D peacock motifs, studded with ruby and emerald gemstones. Comfortable openable side screw lock.",
      te: "చేతితో సున్నితంగా చెక్కబడిన 3D నెమలి డిజైన్లు, కెంపు మరియు పచ్చ రాళ్లతో కూడిన హ్యాండ్‌మేడ్ రోల్డ్ గోల్డ్ కంకణాలు. సౌకర్యవంతమైన సైడ్ స్క్రూ లాక్.",
      hi: "कुशल कारीगरों द्वारा हाथ से तराशे गए 3D मोर रूपांकनों वाली रोल्ड गोल्ड चूड़ियाँ, माणिक और पन्ना रत्नों से सजी हुई। सुविधाजनक स्क्रू लॉक।"
    },
    specs: {
      en: { "Material": "Handmade Rolled Gold", "Pair": "Set of 2 Bangles", "Lock": "Side Screw Openable", "Stones": "Ruby & Emerald Studded" },
      te: { "పదార్థం": "హ్యాండ్‌మేడ్ రోల్డ్ గోల్డ్", "జత": "2 కంకణాల సెట్", "లాక్": "సైడ్ స్క్రూ ఓపెనబుల్", "రాళ్లు": "కెంపులు & పచ్చలు" },
      hi: { "सामग्री": "हस्तनिर्मित रोल्ड गोल्ड", "जोड़ी": "2 कड़ों का सेट", "लॉक": "साइड स्क्रू खुलने योग्य", "पत्थर": "माणिक और पन्ना जड़ित" }
    }
  },
  {
    id: "p3",
    name: {
      en: "Emerald Polki Royal Choker Set",
      te: "ఎమరాల్డ్ పోల్కీ రాయల్ చోకర్ సెట్",
      hi: "पन्ना पोल्की रॉयल चोकर सेट"
    },
    category: "necklaces",
    type: "handmade",
    badge: {
      en: "Handmade",
      te: "చేతిపని",
      hi: "हस्तनिर्मित"
    },
    isHandmade: true,
    price: 2899,
    originalPrice: 4599,
    image: "images/choker_necklace.jpg",
    description: {
      en: "Magnificent handmade choker necklace embedded with glowing emerald green gemstone drops, ruby flower clusters, fine polki work, and micro pearl fringe. Includes matching earrings.",
      te: "మెరిసే పచ్చ రాళ్లు, కెంపు పువ్వులు, పోల్కీ స్టోన్స్ మరియు ముత్యాల అంచులతో చేతితో చేసిన రాజసమైన చోకర్ నెక్లెస్. సరిపోయే జుంకాలతో వస్తుంది.",
      hi: "चमकदार पन्ना रत्नों की बूंदों, माणिक पुष्पगुच्छ, उत्तम पोल्की और मोतियों की झालर से बना भव्य हस्तनिर्मित चोकर हार। मैचिंग झुमकों के साथ।"
    },
    specs: {
      en: { "Material": "Handcrafted Rolled Gold", "Includes": "Choker + Matching Studs", "Stones": "Emerald Cabochons & Polki", "Dori": "Adjustable Silk Thread" },
      te: { "పదార్థం": "హ్యాండ్‌క్రాఫ్టెడ్ రోల్డ్ గోల్డ్", "కలిగి ఉన్నవి": "చోకర్ + మ్యాచింగ్ కమ్మలు", "రాళ్లు": "ఎమరాల్డ్ రాళ్లు & పోల్కీ", "త్రాడు": "సర్దుబాటు చేయగల పట్టు దారం" },
      hi: { "सामग्री": "हस्तनिर्मित रोल्ड गोल्ड", "शामिल": "चोकर + मैचिंग बालियाँ", "पत्थर": "पन्ना और पोल्की", "डोरी": "समायोज्य रेशम धागा" }
    }
  },
  {
    id: "p4",
    name: {
      en: "Antique Heritage Kemp Jhumkas",
      te: "పురాతన కెంపు హ్యాండ్‌మేడ్ జుంకాలు",
      hi: "एंटीक हेरिटेज केंपु झुमके"
    },
    category: "earrings",
    type: "handmade",
    badge: {
      en: "Handmade",
      te: "చేతిపని",
      hi: "हस्तनिर्मित"
    },
    isHandmade: true,
    price: 1499,
    originalPrice: 2499,
    image: "images/antique_jhumkas_premium.jpg",
    description: {
      en: "Masterpiece handmade South Indian rolled gold jhumka earrings with ornate floral studs, kemp stone rings, and bell domes accented with tiny seed pearls. Lightweight & royal.",
      te: "పూల డిజైన్, కెంపు రాళ్లు మరియు సన్నని ముత్యాల గుత్తులతో చేతితో చేసిన సాంప్రదాయ రోల్డ్ గోల్డ్ జుంకాలు. తేలికైన బరువుతో రాజసమైన శైలి.",
      hi: "फूलों के स्टड, केंपु पत्थरों और नन्हें मोतियों के गुच्छों से सजे पारंपरिक हस्तनिर्मित दक्षिण भारतीय रोल्ड गोल्ड झुमके। हल्के और शाही।"
    },
    specs: {
      en: { "Material": "Matte Rolled Gold", "Earring Style": "Heritage Bell Jhumka", "Closure": "Bombay Screw / Push Back", "Weight": "Light & Comfortable" },
      te: { "పదార్థం": "మ్యాట్ రోల్డ్ గోల్డ్", "స్టైల్": "సాంప్రదాయ జుంకా", "లాక్": "బాంబే స్క్రూ / పుష్ బ్యాక్", "బరువు": "తేలికైనది" },
      hi: { "सामग्री": "मैट रोल्ड गोल्ड", "शैली": "पारंपरिक बेल झुमका", "लॉक": "बॉम्बे स्क्रू / पुश बैक", "वजन": "हल्का और आरामदायक" }
    }
  },
  {
    id: "p5",
    name: {
      en: "Bridal Gutpusalu Pearl Necklace",
      te: "బ్రైడల్ గుట్పూసల ముత్యాల హారం",
      hi: "ब्राइडल गुटपुसलु मोती हार"
    },
    category: "necklaces",
    type: "handmade",
    badge: {
      en: "Handmade",
      te: "చేతిపని",
      hi: "हस्तनिर्मित"
    },
    isHandmade: true,
    price: 3999,
    originalPrice: 6499,
    image: "images/gutpusalu_necklace.jpg",
    description: {
      en: "Heritage Telugu bridal Gutpusalu necklace densely strung with clusters of tiny freshwater pearls, kemp rubies, and a grand peacock medallion. An heirloom royal masterpiece.",
      te: "సహజమైన గుత్తుల ముత్యాలు, కెంపు రాళ్లు మరియు అందమైన నెమలి లాకెట్‌తో కూడిన ప్రసిద్ధ తెలుగు పెళ్లిళ్ల గుట్పూసల హారం. తరతరాలకు నిలిచే ఆభరణం.",
      hi: "नन्हें मोतियों के घने गुच्छों, केंपु माणिक और भव्य मयूर पेंडेंट से सुसज्जित प्रसिद्ध पारंपरिक गुटपुसलु दुल्हन का हार। पीढ़ियों तक चलने वाला गहना।"
    },
    specs: {
      en: { "Material": "Artisanal Rolled Gold", "Pearls": "Clustered Rice Pearls", "Motif": "Royal Mayura (Peacock)", "Length": "Adjustable Golden Thread" },
      te: { "పదార్థం": "కళాత్మక రోల్డ్ గోల్డ్", "ముత్యాలు": "సహజ గుత్తుల ముత్యాలు", "డిజైన్": "రాయల్ నెమలి లాకెట్", "పొడవు": "సర్దుబాటు చేయగల దారం" },
      hi: { "सामग्री": "हस्तनिर्मित रोल्ड गोल्ड", "मोती": "प्राकृतिक गुच्छेदार मोती", "डिज़ाइन": "शाही मयूर पेंडेंट", "लंबाई": "समायोज्य सुनहरी डोरी" }
    }
  },
  {
    id: "p6",
    name: {
      en: "Signature Bridal Rolled Gold Choker Set",
      te: "సిగ్నేచర్ బ్రైడల్ రోల్డ్ గోల్డ్ చోకర్ సెట్",
      hi: "सिग्नेचर ब्राइडल रोल्ड गोल्ड चोकर सेट"
    },
    category: "necklaces",
    type: "rolled-gold",
    badge: {
      en: "Bestseller",
      te: "బెస్ట్ సెల్లర్",
      hi: "बेस्टसेलर"
    },
    isHandmade: false,
    price: 4999,
    originalPrice: 7999,
    image: "images/bridal_jewellery_set.jpg",
    description: {
      en: "Grand South Indian bridal rolled gold choker set with Lakshmi motifs, emerald bead drops, ruby flower work, and matching antique jhumkas. The crown jewel of Yova Collections.",
      te: "శ్రీ మహాలక్ష్మి దేవి ప్రతిమలు, పచ్చ పూసలు, కెంపు రాళ్లు మరియు సరిపోయే గ్రాండ్ జుంకాతో కూడిన సంపూర్ణ బ్రైడల్ రోల్డ్ గోల్డ్ చోకర్ సెట్.",
      hi: "लक्ष्मी देवी की आकृतियों, पन्ना मोतियों, माणिक फूलों और मैचिंग भव्य झुमकों से सजा संपूर्ण ब्राइडल रोल्ड गोल्ड चोकर सेट। योवा कलेक्शन्स का मुकुट रत्न।"
    },
    specs: {
      en: { "Material": "22K Heavy Rolled Gold", "Set": "Grand Choker + Jhumkas", "Base Metal": "Copper-Brass Alloy", "Packaging": "Royal Velvet Box" },
      te: { "పదార్థం": "22K హెవీ రోల్డ్ గోల్డ్", "సెట్": "గ్రాండ్ చోకర్ + జుంకాలు", "బేస్ మెటల్": "రాగి-ఇత్తడి మిశ్రమం", "బాక్స్": "రాయల్ వెల్వెట్ బాక్స్" },
      hi: { "सामग्री": "22K हेवी रोल्ड गोल्ड", "सेट": "भव्य चोकर + झुमके", "आधार धातु": "तांबा-पीतल मिश्र धातु", "पैकिंग": "शाही मखमली बॉक्स" }
    }
  },
  {
    id: "p7",
    name: {
      en: "Heritage Kemp Bell Jhumkas",
      te: "\u0C39\u0C46\u0C30\u0C3F\u0C1F\u0C47\u0C1C\u0C4D \u0C15\u0C46\u0C02\u0C2A\u0C41 \u0C2C\u0C46\u0C32\u0C4D \u0C1C\u0C41\u0C02\u0C15\u0C3E\u0C32\u0C41",
      hi: "\u0939\u0947\u0930\u093F\u0924\u0947\u091C \u0915\u0947\u0902\u092A\u0941 \u092C\u0947\u0932 \u091D\u0941\u092E\u0915\u0947"
    },
    category: "earrings",
    type: "handmade",
    badge: { en: "New Arrival", te: "\u0C15\u0C4A\u0C24\u0C4D\u0C24\u0C17\u0C3E \u0C35\u0C1A\u0C4D\u0C1A\u0C3F\u0C02\u0C26\u0C3F", hi: "\u0928\u092F\u093E \u0906\u0917\u092E\u0928" },
    isHandmade: true,
    price: 1299,
    originalPrice: 2199,
    image: "images/antique_jhumkas.jpg",
    description: {
      en: "Elegant heritage-style kemp stone jhumkas with ornate floral stud tops, layered bell dome, and delicate pearl fringe. Lightweight everyday wear with a royal antique finish.",
      te: "\u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C2A\u0C42\u0C32 \u0C38\u0C4D\u0C1F\u0C21\u0C4D, \u0C15\u0C46\u0C02\u0C2A\u0C41 \u0C30\u0C3E\u0C33\u0C4D\u0C32\u0C41, \u0C2C\u0C46\u0C32\u0C4D \u0C21\u0C4B\u0C2E\u0C4D \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C41\u0C24\u0C4D\u0C2F\u0C3E\u0C32 \u0C05\u0C02\u0C1A\u0C41\u0C32\u0C24\u0C4B \u0C15\u0C42\u0C21\u0C3F\u0C28 \u0C39\u0C46\u0C30\u0C3F\u0C1F\u0C47\u0C1C\u0C4D \u0C1C\u0C41\u0C02\u0C15\u0C3E\u0C32\u0C41.",
      hi: "\u092B\u0942\u0932\u094B\u0902 \u0915\u0947 \u0938\u094D\u091F\u0921, \u0915\u0947\u0902\u092A\u0941 \u092A\u0924\u094D\u0925\u0930\u094B\u0902, \u092C\u0947\u0932 \u0921\u094B\u092E \u0914\u0930 \u092E\u094B\u0924\u093F\u092F\u094B\u0902 \u0915\u0940 \u091D\u093E\u0932\u0930 \u0938\u0947 \u0938\u091C\u0947 \u0938\u0941\u0902\u0926\u0930 \u0939\u0947\u0930\u093F\u091F\u0947\u091C \u091D\u0941\u092E\u0915\u0947\u0964"
    },
    specs: {
      en: { "Material": "Antique Rolled Gold", "Style": "Heritage Bell Jhumka", "Closure": "Bombay Screw / Push Back", "Weight": "Light & Comfortable" },
      te: { "\u0C2A\u0C26\u0C3E\u0C30\u0C4D\u0C25\u0C02": "\u0C2F\u0C3E\u0C02\u0C1F\u0C3F\u0C15\u0C4D \u0C30\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C17\u0C4B\u0C32\u0C4D\u0C21\u0C4D", "\u0C38\u0C4D\u0C1F\u0C48\u0C32\u0C4D": "\u0C39\u0C46\u0C30\u0C3F\u0C1F\u0C47\u0C1C\u0C4D \u0C1C\u0C41\u0C02\u0C15\u0C3E", "\u0C32\u0C3E\u0C15\u0C4D": "\u0C2C\u0C3E\u0C02\u0C2C\u0C47 \u0C38\u0C4D\u0C15\u0C4D\u0C30\u0C42", "\u0C2C\u0C30\u0C41\u0C35\u0C41": "\u0C24\u0C47\u0C32\u0C3F\u0C15\u0C48\u0C28\u0C26\u0C3F" },
      hi: { "\u0938\u093E\u092E\u0917\u094D\u0930\u0940": "\u090F\u0902\u091F\u0940\u0915 \u0930\u094B\u0932\u094D\u0921 \u0917\u094B\u0932\u094D\u0921", "\u0936\u0948\u0932\u0940": "\u0939\u0947\u0930\u093F\u091F\u0947\u091C \u092C\u0947\u0932 \u091D\u0941\u092E\u0915\u093E", "\u0932\u0949\u0915": "\u092C\u0949\u092E\u094D\u092C\u0947 \u0938\u094D\u0915\u094D\u0930\u0942", "\u0935\u091C\u0928": "\u0939\u0932\u094D\u0915\u093E" }
    }
  },
  {
    id: "p8",
    name: {
      en: "Royal Bridal Maang Tikka",
      te: "\u0C30\u0C3E\u0C2F\u0C32\u0C4D \u0C2C\u0C4D\u0C30\u0C48\u0C21\u0C32\u0C4D \u0C2E\u0C3E\u0C02\u0C17\u0C4D \u0C24\u0C3F\u0C15\u0C4D\u0C15\u0C3E",
      hi: "\u0930\u0949\u092F\u0932 \u092C\u094D\u0930\u093E\u0907\u0921\u0932 \u092E\u093E\u0901\u0917 \u091F\u0940\u0915\u093E"
    },
    category: "earrings",
    type: "rolled-gold",
    badge: { en: "New Arrival", te: "\u0C15\u0C4A\u0C24\u0C4D\u0C24\u0C17\u0C3E \u0C35\u0C1A\u0C4D\u0C1A\u0C3F\u0C02\u0C26\u0C3F", hi: "\u0928\u092F\u093E \u0906\u0917\u092E\u0928" },
    isHandmade: false,
    price: 1399,
    originalPrice: 2399,
    image: "images/bridal_jewellery_set_burgundy.jpg",
    description: {
      en: "Exquisite South Indian maang tikka in antique rolled gold with a grand Lakshmi pendant, kemp ruby drops, emerald stones, and freshwater pearl detailing. Adjustable chain for a perfect fit.",
      te: "\u0C17\u0C4D\u0C30\u0C3E\u0C02\u0C21\u0C4D \u0C32\u0C15\u0C4D\u0C37\u0C4D\u0C2E\u0C40 \u0C32\u0C3E\u0C15\u0C46\u0C1F\u0C4D, \u0C15\u0C46\u0C02\u0C2A\u0C41 \u0C1A\u0C41\u0C15\u0C4D\u0C15\u0C32\u0C41, \u0C2A\u0C1A\u0C4D\u0C1A \u0C30\u0C3E\u0C33\u0C4D\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C41\u0C24\u0C4D\u0C2F\u0C3E\u0C32 \u0C05\u0C32\u0C02\u0C15\u0C30\u0C23\u0C24\u0C4B \u0C15\u0C42\u0C21\u0C3F\u0C28 \u0C05\u0C02\u0C26\u0C2E\u0C48\u0C28 \u0C2E\u0C3E\u0C02\u0C17\u0C4D \u0C24\u0C3F\u0C15\u0C4D\u0C15\u0C3E.",
      hi: "\u0932\u0915\u094D\u0937\u094D\u092E\u0940 \u092A\u0947\u0902\u0921\u0902\u091F, \u0915\u0947\u0902\u092A\u0941 \u092E\u093E\u0923\u093F\u0915 \u092C\u0942\u0902\u0926\u094B\u0902, \u092A\u0928\u094D\u0928\u093E \u0914\u0930 \u092E\u094B\u0924\u093F\u092F\u094B\u0902 \u0938\u0947 \u0938\u091C\u0940 \u090F\u0902\u091F\u0940\u0915 \u0930\u094B\u0932\u094D\u0921 \u0917\u094B\u0932\u094D\u0921 \u092E\u093E\u0901\u0917 \u091F\u0940\u0915\u093E\u0964"
    },
    specs: {
      en: { "Material": "Antique Rolled Gold", "Style": "South Indian Matha Patti", "Stones": "Kemp Ruby & Emerald", "Chain": "Adjustable 14\u201318 inch" },
      te: { "\u0C2A\u0C26\u0C3E\u0C30\u0C4D\u0C25\u0C02": "\u0C2F\u0C3E\u0C02\u0C1F\u0C3F\u0C15\u0C4D \u0C30\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C17\u0C4B\u0C32\u0C4D\u0C21\u0C4D", "\u0C38\u0C4D\u0C1F\u0C48\u0C32\u0C4D": "\u0C2E\u0C3E\u0C02\u0C17\u0C4D \u0C24\u0C3F\u0C15\u0C4D\u0C15\u0C3E", "\u0C30\u0C3E\u0C33\u0C4D\u0C32\u0C41": "\u0C15\u0C46\u0C02\u0C2A\u0C41 & \u0C2A\u0C1A\u0C4D\u0C1A", "\u0C1A\u0C48\u0C28\u0C4D": "14\u201318 \u0C05\u0C02\u0C17\u0C41\u0C33\u0C3E\u0C32\u0C41" },
      hi: { "\u0938\u093E\u092E\u0917\u094D\u0930\u0940": "\u090F\u0902\u091F\u0940\u0915 \u0930\u094B\u0932\u094D\u0921 \u0917\u094B\u0932\u094D\u0921", "\u0936\u0948\u0932\u0940": "\u092E\u093E\u0901\u0917 \u091F\u0940\u0915\u093E", "\u092A\u0924\u094D\u0925\u0930": "\u0915\u0947\u0902\u092A\u0941 \u092E\u093E\u0923\u093F\u0915 \u0914\u0930 \u092A\u0928\u094D\u0928\u093E", "\u091A\u0947\u0928": "14\u201318 \u0907\u0902\u091A" }
    }
  },
  {
    id: "p9",
    name: {
      en: "Antique Gold Statement Rings (Set of 4)",
      te: "\u0C2F\u0C3E\u0C02\u0C1F\u0C3F\u0C15\u0C4D \u0C17\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C30\u0C3F\u0C02\u0C17\u0C4D\u0C38\u0C4D (4 \u0C38\u0C46\u0C1F\u0C4D)",
      hi: "\u090F\u0902\u091F\u0940\u0915 \u0917\u094B\u0932\u094D\u0921 \u0930\u093F\u0902\u0917\u094D\u0938 (4 \u0915\u093E \u0938\u0947\u091F)"
    },
    category: "bangles",
    type: "rolled-gold",
    badge: { en: "New Arrival", te: "\u0C15\u0C4A\u0C24\u0C4D\u0C24\u0C17\u0C3E \u0C35\u0C1A\u0C4D\u0C1A\u0C3F\u0C02\u0C26\u0C3F", hi: "\u0928\u092F\u093E \u0906\u0917\u092E\u0928" },
    isHandmade: false,
    price: 1199,
    originalPrice: 1999,
    image: "images/hero_jewellery.jpg",
    description: {
      en: "Set of 4 bold South Indian statement rings in antique rolled gold \u2014 peacock ring, floral kemp ruby ring, emerald cabochon ring, and pearl cluster ring. Perfect for bridal or festive styling.",
      te: "\u0C28\u0C46\u0C2E\u0C32\u0C3F \u0C30\u0C3F\u0C02\u0C17\u0C4D, \u0C15\u0C46\u0C02\u0C2A\u0C41 \u0C2A\u0C42\u0C32 \u0C30\u0C3F\u0C02\u0C17\u0C4D, \u0C2A\u0C1A\u0C4D\u0C1A \u0C30\u0C3F\u0C02\u0C17\u0C4D \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C41\u0C24\u0C4D\u0C2F\u0C3E\u0C32 \u0C30\u0C3F\u0C02\u0C17\u0C4D \u0C38\u0C39\u0C3F\u0C24 4 \u0C2F\u0C3E\u0C02\u0C1F\u0C3F\u0C15\u0C4D \u0C30\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C17\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C30\u0C3F\u0C02\u0C17\u0C4D\u0C38\u0C4D \u0C38\u0C46\u0C1F\u0C4D.",
      hi: "\u092E\u094B\u0930 \u0930\u093F\u0902\u0917, \u092B\u0942\u0932\u094B\u0902 \u0935\u093E\u0932\u0940 \u0915\u0947\u0902\u092A\u0941 \u0930\u093F\u0902\u0917, \u092A\u0928\u094D\u0928\u093E \u0930\u093F\u0902\u0917 \u0914\u0930 \u092E\u094B\u0924\u0940 \u0930\u093F\u0902\u0917 \u0938\u0939\u093F\u0924 4 \u090F\u0902\u091F\u0940\u0915 \u0930\u094B\u0932\u094D\u0921 \u0917\u094B\u0932\u094D\u0921 \u0930\u093F\u0902\u0917\u094D\u0938 \u0915\u093E \u0938\u0947\u091F\u0964"
    },
    specs: {
      en: { "Material": "Antique Rolled Gold", "Quantity": "Set of 4 Rings", "Stones": "Kemp, Emerald & Pearl", "Size": "Adjustable Open Band" },
      te: { "\u0C2A\u0C26\u0C3E\u0C30\u0C4D\u0C25\u0C02": "\u0C2F\u0C3E\u0C02\u0C1F\u0C3F\u0C15\u0C4D \u0C30\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C17\u0C4B\u0C32\u0C4D\u0C21\u0C4D", "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02": "4 \u0C30\u0C3F\u0C02\u0C17\u0C4D\u0C38\u0C4D \u0C38\u0C46\u0C1F\u0C4D", "\u0C30\u0C3E\u0C33\u0C4D\u0C32\u0C41": "\u0C15\u0C46\u0C02\u0C2A\u0C41, \u0C2A\u0C1A\u0C4D\u0C1A & \u0C2E\u0C41\u0C24\u0C4D\u0C2F\u0C3E\u0C32\u0C41", "\u0C38\u0C48\u0C1C\u0C4D": "\u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2C\u0C4D\u0C2F\u0C3E\u0C02\u0C21\u0C4D" },
      hi: { "\u0938\u093E\u092E\u0917\u094D\u0930\u0940": "\u090F\u0902\u091F\u0940\u0915 \u0930\u094B\u0932\u094D\u0921 \u0917\u094B\u0932\u094D\u0921", "\u092E\u093E\u0924\u094D\u0930\u093E": "4 \u0930\u093F\u0902\u0917\u094D\u0938 \u0915\u093E \u0938\u0947\u091F", "\u092A\u0924\u094D\u0925\u0930": "\u0915\u0947\u0902\u092A\u0941, \u092A\u0928\u094D\u0928\u093E \u0914\u0930 \u092E\u094B\u0924\u0940", "\u0938\u093E\u0907\u091C\u093C": "\u090F\u0921\u091C\u0938\u094D\u091F\u0947\u092C\u0932 \u0913\u092A\u0928 \u092C\u0948\u0902\u0921" }
    }
  },
  {
    id: "p10",
    name: {
      en: "Grand Complete Bridal Jewellery Set",
      te: "\u0C17\u0C4D\u0C30\u0C3E\u0C02\u0C21\u0C4D \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C2C\u0C4D\u0C30\u0C48\u0C21\u0C32\u0C4D \u0C1C\u0C4D\u0C2F\u0C42\u0C35\u0C46\u0C32\u0C4D\u0C32\u0C30\u0C40 \u0C38\u0C46\u0C1F\u0C4D",
      hi: "\u0917\u094D\u0930\u0948\u0902\u0921 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u092C\u094D\u0930\u093E\u0907\u0921\u0932 \u091C\u094D\u0935\u0947\u0932\u0930\u0940 \u0938\u0947\u091F"
    },
    category: "necklaces",
    type: "handmade",
    badge: { en: "Premium Set", te: "\u0C2A\u0C4D\u0C30\u0C40\u0C2E\u0C3F\u0C2F\u0C02 \u0C38\u0C46\u0C1F\u0C4D", hi: "\u092A\u094D\u0930\u0940\u092E\u093F\u092F\u092E \u0938\u0947\u091F" },
    isHandmade: true,
    price: 8999,
    originalPrice: 14999,
    image: "images/bridal_jewellery_set_burgundy.jpg",
    description: {
      en: "Complete South Indian bridal jewellery set in antique rolled gold \u2014 includes grand layered necklace, matching choker, large jhumkas, maang tikka, set of 4 bangles, and 2 finger rings. Everything for the perfect bridal look.",
      te: "\u0C17\u0C4D\u0C30\u0C3E\u0C02\u0C21\u0C4D \u0C2A\u0C4A\u0C30\u0C32 \u0C39\u0C3E\u0C30\u0C02, \u0C1A\u0C4B\u0C15\u0C30\u0C4D, \u0C2A\u0C46\u0C26\u0C4D\u0C26 \u0C1C\u0C41\u0C02\u0C15\u0C3E\u0C32\u0C41, \u0C2E\u0C3E\u0C02\u0C17\u0C4D \u0C24\u0C3F\u0C15\u0C4D\u0C15\u0C3E, 4 \u0C15\u0C02\u0C15\u0C23\u0C3E\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 2 \u0C30\u0C3F\u0C02\u0C17\u0C4D\u0C32\u0C41 \u0C38\u0C39\u0C3F\u0C24 \u0C38\u0C02\u0C2A\u0C42\u0C30\u0C4D\u0C23 \u0C2C\u0C4D\u0C30\u0C48\u0C21\u0C32\u0C4D \u0C38\u0C46\u0C1F\u0C4D.",
      hi: "\u092D\u0935\u094D\u092F \u0939\u093E\u0930, \u091A\u094B\u0915\u0930, \u092C\u0921\u093C\u0947 \u091D\u0941\u092E\u0915\u0947, \u092E\u093E\u0901\u0917 \u091F\u0940\u0915\u093E, 4 \u091A\u0942\u0921\u093C\u093F\u092F\u093E\u0901 \u0914\u0930 2 \u0930\u093F\u0902\u0917 \u0938\u0939\u093F\u0924 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u092C\u094D\u0930\u093E\u0907\u0921\u0932 \u091C\u094D\u0935\u0947\u0932\u0930\u0940 \u0938\u0947\u091F\u0964"
    },
    specs: {
      en: { "Pieces": "Necklace + Choker + Jhumkas + Tikka + Bangles + Rings", "Material": "Handmade Antique Rolled Gold", "Stones": "Kemp Ruby, Emerald & Pearl", "Packaging": "Royal Velvet Gift Box" },
      te: { "\u0C2A\u0C40\u0C38\u0C41\u0C32\u0C41": "\u0C39\u0C3E\u0C30\u0C02 + \u0C1A\u0C4B\u0C15\u0C30\u0C4D + \u0C1C\u0C41\u0C02\u0C15\u0C3E\u0C32\u0C41 + \u0C24\u0C3F\u0C15\u0C4D\u0C15\u0C3E + \u0C15\u0C02\u0C15\u0C23\u0C3E\u0C32\u0C41 + \u0C30\u0C3F\u0C02\u0C17\u0C4D\u0C32\u0C41", "\u0C2A\u0C26\u0C3E\u0C30\u0C4D\u0C25\u0C02": "\u0C39\u0C4D\u0C2F\u0C3E\u0C02\u0C21\u0C4D\u200C\u0C2E\u0C47\u0C21\u0C4D \u0C30\u0C4B\u0C32\u0C4D\u0C21\u0C4D \u0C17\u0C4B\u0C32\u0C4D\u0C21\u0C4D", "\u0C30\u0C3E\u0C33\u0C4D\u0C32\u0C41": "\u0C15\u0C46\u0C02\u0C2A\u0C41, \u0C2A\u0C1A\u0C4D\u0C1A & \u0C2E\u0C41\u0C24\u0C4D\u0C2F\u0C3E\u0C32\u0C41", "\u0C2C\u0C3E\u0C15\u0C4D\u0C38\u0C4D": "\u0C30\u0C3E\u0C2F\u0C32\u0C4D \u0C35\u0C46\u0C32\u0C4D\u0C35\u0C46\u0C1F\u0C4D \u0C17\u0C3F\u0C2B\u0C4D\u0C1F\u0C4D \u0C2C\u0C3E\u0C15\u0C4D\u0C38\u0C4D" },
      hi: { "\u092A\u0940\u0938": "\u0939\u093E\u0930 + \u091A\u094B\u0915\u0930 + \u091D\u0941\u092E\u0915\u0947 + \u091F\u0940\u0915\u093E + \u091A\u0942\u0921\u093C\u093F\u092F\u093E\u0901 + \u0930\u093F\u0902\u0917", "\u0938\u093E\u092E\u0917\u094D\u0930\u0940": "\u0939\u0938\u094D\u0924\u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0930\u094B\u0932\u094D\u0921 \u0917\u094B\u0932\u094D\u0921", "\u092A\u0924\u094D\u0925\u0930": "\u0915\u0947\u0902\u092A\u0941, \u092A\u0928\u094D\u0928\u093E \u0914\u0930 \u092E\u094B\u0924\u0940", "\u092A\u0948\u0915\u093F\u0902\u0917": "\u0936\u093E\u0939\u0940 \u092E\u0916\u092E\u0932\u0940 \u0917\u093F\u092B\u094D\u091F \u092C\u0949\u0915\u094D\u0938" }
    }
  }
];

// ==========================================
// 3. APPLICATION STATE
// ==========================================
const appState = {
  currentLang: "en",
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  activeGalleryFilter: "all",
  activePage: "home",
  cart: [],
  quickViewSelectedQty: 1
};

const WA_PHONE = "919701959456";

// ==========================================
// 4. LANGUAGE AUTO-DETECTION & SWITCHER
// ==========================================
function detectVisitorLanguage() {
  const candidates = [];
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    candidates.push(...navigator.languages);
  }
  if (navigator.language) candidates.push(navigator.language);
  if (navigator.userLanguage) candidates.push(navigator.userLanguage);

  const supported = ["en", "te", "hi", "ta", "kn", "ml", "es", "fr", "de", "ar", "zh", "ja"];

  for (const raw of candidates) {
    if (!raw || typeof raw !== "string") continue;
    const l = raw.toLowerCase().trim();
    for (const code of supported) {
      if (l.startsWith(code)) return code;
    }
  }
  return "en";
}

function initLanguage() {
  const savedLang = localStorage.getItem("yova_preferred_lang_v2");
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang, false);
    return;
  }
  const detected = detectVisitorLanguage();
  setLanguage(detected, false);
}

function setLanguage(lang, saveToStorage = true) {
  if (!translations[lang]) lang = "en";
  appState.currentLang = lang;

  if (saveToStorage) {
    localStorage.setItem("yova_preferred_lang_v2", lang);
    localStorage.setItem("yova_preferred_lang", lang);
  }

  // Update HTML lang & dir attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");

  // Update current language button display
  const langLabels = {
    en: "English",
    te: "తెలుగు",
    hi: "हिन्दी",
    ta: "தமிழ்",
    kn: "ಕನ್ನಡ",
    ml: "മലയാളം",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    ar: "العربية",
    zh: "中文",
    ja: "日本語"
  };
  const labelEl = document.getElementById("currentLangLabel");
  if (labelEl) labelEl.textContent = langLabels[lang] || "English";

  // Update active states in dropdown and mobile pills
  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Apply translations to all data-i18n elements
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Apply translations to all data-i18n-placeholder elements
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Re-render dynamic components with new language
  renderFeaturedProducts();
  renderProductsCatalog();
  renderGallery();
  updateCartUI();
  if (appState.activePage === "checkout") renderCheckoutSummary();
}

// ==========================================
// 5. WHATSAPP LINK GENERATOR
// ==========================================
function buildWhatsAppUrl(productName, price) {
  const dict = translations[appState.currentLang] || translations.en;
  let text = dict.wa_msg_template || "Hi Yova Collections, I would like to order: *{name}* (Price: ₹{price}). Please share availability and delivery details.";
  text = text.replace("{name}", productName).replace("{price}", price.toLocaleString("en-IN"));
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

// ==========================================
// 6. PRODUCT RENDERING
// ==========================================
function createProductCardHTML(product) {
  const lang = appState.currentLang;
  const name = product.name[lang] || product.name.en;
  const badgeText = product.badge[lang] || product.badge.en;
  const isHandmade = product.isHandmade;
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const dict = translations[lang] || translations.en;

  const categoryLabels = {
    necklaces: dict.cat_necklaces || "Necklaces & Harams",
    bangles: dict.cat_bangles || "Bangles & Kadas",
    earrings: dict.cat_earrings || "Antique Jhumkas"
  };

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="card-media-wrapper" onclick="openQuickView('${product.id}')">
        <span class="card-badge ${isHandmade ? 'handmade-badge' : ''}">${badgeText}</span>
        <img src="${product.image}" alt="${name}" class="product-card-img" loading="lazy">
        <button class="card-quick-view-btn" onclick="event.stopPropagation(); openQuickView('${product.id}')">
          👁️ ${dict.quick_view || 'Quick View'}
        </button>
      </div>
      <div class="card-info">
        <span class="card-category">${categoryLabels[product.category] || product.category}</span>
        <h3 class="card-title">${name}</h3>
        <div class="card-price-row">
          <span class="card-price">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="card-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="card-discount-tag">${discount}% OFF</span>
        </div>
        <div class="card-actions card-ecommerce-actions">
          <button class="btn btn-add-cart" onclick="event.stopPropagation(); addToCart('${product.id}')" title="${dict.add_to_cart || 'Add to Cart'}">
            <svg class="icon cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span>${dict.add_to_cart || 'Add to Cart'}</span>
          </button>
          <button class="btn btn-buy-now" onclick="event.stopPropagation(); buyNow('${product.id}')" title="${dict.buy_now || 'Buy Now'}">
            <svg class="icon flash-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>${dict.buy_now || 'Buy Now'}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProductsGrid");
  if (!container) return;
  // Show 4 top featured products
  const featured = productsData.slice(0, 4);
  container.innerHTML = featured.map(createProductCardHTML).join("");
}

function renderProductsCatalog() {
  const container = document.getElementById("allProductsGrid");
  const emptyState = document.getElementById("noProductsFound");
  const countDisplay = document.getElementById("productsCountText");
  if (!container) return;

  let filtered = [...productsData];

  // 1. Filter by category pill
  if (appState.activeCategory !== "all") {
    if (appState.activeCategory === "handmade") {
      filtered = filtered.filter(p => p.isHandmade || p.type === "handmade");
    } else if (appState.activeCategory === "rolled-gold") {
      filtered = filtered.filter(p => !p.isHandmade || p.type === "rolled-gold");
    } else {
      filtered = filtered.filter(p => p.category === appState.activeCategory);
    }
  }

  // 2. Filter by search input
  if (appState.searchQuery.trim()) {
    const q = appState.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => {
      const en = p.name.en.toLowerCase();
      const te = p.name.te.toLowerCase();
      const hi = p.name.hi.toLowerCase();
      const cat = p.category.toLowerCase();
      return en.includes(q) || te.includes(q) || hi.includes(q) || cat.includes(q);
    });
  }

  // 3. Sort
  if (appState.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (appState.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (appState.sortBy === "name") {
    const lang = appState.currentLang;
    filtered.sort((a, b) => (a.name[lang] || a.name.en).localeCompare(b.name[lang] || b.name.en));
  }

  // Update UI count
  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} jewellery piece${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
  } else {
    if (emptyState) emptyState.style.display = "none";
    container.innerHTML = filtered.map(createProductCardHTML).join("");
  }
}

// ==========================================
// 7. GALLERY RENDERING & LIGHTBOX
// ==========================================
function renderGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  const lang = appState.currentLang;
  let items = [...productsData];

  if (appState.activeGalleryFilter !== "all") {
    items = items.filter(p => p.category === appState.activeGalleryFilter);
  }

  container.innerHTML = items.map(p => {
    const name = p.name[lang] || p.name.en;
    return `
      <div class="gallery-item" onclick="openLightbox('${p.id}')">
        <img src="${p.image}" alt="${name}" class="gallery-thumb" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-item-title">${name}</div>
          <div class="gallery-item-price">₹${p.price.toLocaleString('en-IN')}</div>
          <div class="gallery-zoom-hint">🔍 Tap to inspect & order</div>
        </div>
      </div>
    `;
  }).join("");
}

function openLightbox(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const lang = appState.currentLang;
  const name = product.name[lang] || product.name.en;
  const dict = translations[lang] || translations.en;

  const modal = document.getElementById("galleryLightboxModal");
  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const price = document.getElementById("lightboxPrice");
  const waBtn = document.getElementById("lightboxWaBtn");

  img.src = product.image;
  img.alt = name;
  title.textContent = name;
  price.textContent = `₹${product.price.toLocaleString('en-IN')}`;
  waBtn.href = buildWhatsAppUrl(name, product.price);

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("galleryLightboxModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// 8. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  appState.quickViewSelectedQty = 1;
  const lang = appState.currentLang;
  const name = product.name[lang] || product.name.en;
  const desc = product.description[lang] || product.description.en;
  const specs = (product.specs[lang] || product.specs.en) || {};
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const dict = translations[lang] || translations.en;

  const specsHTML = Object.entries(specs).map(([k, v]) => `
    <li><span>${k}</span> <strong>${v}</strong></li>
  `).join("");

  const modalBody = document.getElementById("quickViewBody");
  modalBody.innerHTML = `
    <div class="modal-product-media">
      <img src="${product.image}" alt="${name}" class="modal-product-img">
    </div>
    <div class="modal-product-details">
      <span class="modal-category-tag">${product.isHandmade ? '★ HANDMADE ROLLED GOLD' : '★ ROLLED GOLD CLASSIC'}</span>
      <h2 class="modal-product-title">${name}</h2>
      <div class="modal-price-row">
        <span class="modal-price">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="modal-orig-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        <span class="card-discount-tag">${discount}% OFF</span>
      </div>
      <p class="modal-desc">${desc}</p>
      
      <ul class="modal-specs-list">
        ${specsHTML}
      </ul>

      <div class="modal-qty-actions-row">
        <div class="qty-selector-group">
          <label class="qty-label">${dict.qty || 'Qty'}:</label>
          <div class="qty-stepper">
            <button type="button" class="qty-stepper-btn" onclick="adjustQuickViewQty(-1)">-</button>
            <span class="qty-stepper-val" id="quickViewQtyVal">1</span>
            <button type="button" class="qty-stepper-btn" onclick="adjustQuickViewQty(1)">+</button>
          </div>
        </div>
        <div class="modal-btn-row">
          <button class="btn btn-add-cart btn-modal-cart" onclick="addToCartFromQuickView('${product.id}')">
            <svg class="icon cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span>${dict.add_to_cart || 'Add to Cart'}</span>
          </button>
          <button class="btn btn-buy-now btn-modal-buy" onclick="buyNowFromQuickView('${product.id}')">
            <svg class="icon flash-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>${dict.buy_now || 'Buy Now'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("quickViewModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function adjustQuickViewQty(delta) {
  let val = (appState.quickViewSelectedQty || 1) + delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  appState.quickViewSelectedQty = val;
  const el = document.getElementById("quickViewQtyVal");
  if (el) el.textContent = val;
}

function addToCartFromQuickView(productId) {
  const qty = appState.quickViewSelectedQty || 1;
  addToCart(productId, qty, true);
  closeQuickView();
}

function buyNowFromQuickView(productId) {
  const qty = appState.quickViewSelectedQty || 1;
  closeQuickView();
  buyNow(productId, qty);
}

function closeQuickView() {
  document.getElementById("quickViewModal").classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// SHOPPING CART SYSTEM
// ==========================================
function initCart() {
  try {
    const saved = localStorage.getItem("yova_cart");
    if (saved) appState.cart = JSON.parse(saved);
  } catch (e) {
    appState.cart = [];
  }
  if (!Array.isArray(appState.cart)) appState.cart = [];
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("yova_cart", JSON.stringify(appState.cart));
  } catch (e) {}
  updateCartUI();
}

function addToCart(productId, qty = 1, showToastNotification = true) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existing = appState.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    appState.cart.push({ id: productId, qty: qty });
  }

  saveCart();

  if (showToastNotification) {
    const lang = appState.currentLang;
    const dict = translations[lang] || translations.en;
    const name = product.name[lang] || product.name.en;
    showToast(dict.added_to_cart || "Added to Cart!", name, product.image);
  }
}

function buyNow(productId, qty = 1) {
  addToCart(productId, qty, false);
  openCartDrawer();
}

function removeFromCart(productId) {
  appState.cart = appState.cart.filter(item => item.id !== productId);
  saveCart();
}

function updateCartQuantity(productId, delta) {
  const item = appState.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function getCartItemsCount() {
  return appState.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return appState.cart.reduce((total, item) => {
    const p = productsData.find(prod => prod.id === item.id);
    return total + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateCartUI() {
  const totalCount = getCartItemsCount();
  const lang = appState.currentLang;
  const dict = translations[lang] || translations.en;

  // Header & Mobile Cart Badges
  const headerBadge = document.getElementById("headerCartBadge");
  if (headerBadge) {
    headerBadge.textContent = totalCount;
    headerBadge.style.display = totalCount > 0 ? "flex" : "none";
  }

  const mobileBadge = document.getElementById("mobileCartBadge");
  if (mobileBadge) {
    mobileBadge.textContent = totalCount;
    mobileBadge.style.display = totalCount > 0 ? "flex" : "none";
  }

  // Drawer Title Count
  const drawerCount = document.getElementById("cartDrawerCount");
  if (drawerCount) {
    drawerCount.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`;
  }

  // Render Drawer Items
  const itemsContainer = document.getElementById("cartDrawerItems");
  const footerContainer = document.getElementById("cartDrawerFooter");

  if (!itemsContainer || !footerContainer) return;

  if (appState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <h4 class="cart-empty-title">${dict.cart_empty || 'Your cart is empty'}</h4>
        <p class="cart-empty-desc">${dict.cart_empty_sub || 'Discover our royal jewellery collection and add items to your cart.'}</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); switchPage('products');">${dict.continue_shopping || 'Start Shopping'}</button>
      </div>
    `;
    footerContainer.innerHTML = "";
    return;
  }

  itemsContainer.innerHTML = appState.cart.map(item => {
    const product = productsData.find(p => p.id === item.id);
    if (!product) return "";
    const name = product.name[lang] || product.name.en;
    const itemTotal = product.price * item.qty;

    return `
      <div class="cart-item-row" data-id="${product.id}">
        <img src="${product.image}" alt="${name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${name}</h4>
          <div class="cart-item-price">₹${product.price.toLocaleString('en-IN')}</div>
          <div class="cart-item-controls">
            <div class="cart-qty-stepper">
              <button type="button" class="cart-qty-btn" onclick="updateCartQuantity('${product.id}', -1)">-</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button type="button" class="cart-qty-btn" onclick="updateCartQuantity('${product.id}', 1)">+</button>
            </div>
            <button type="button" class="cart-remove-btn" onclick="removeFromCart('${product.id}')" title="${dict.remove || 'Remove'}">
              🗑️
            </button>
          </div>
        </div>
        <div class="cart-item-total">₹${itemTotal.toLocaleString('en-IN')}</div>
      </div>
    `;
  }).join("");

  const subtotal = getCartSubtotal();
  footerContainer.innerHTML = `
    <div class="cart-summary-box">
      <div class="cart-summary-line">
        <span>${dict.subtotal || 'Subtotal'}:</span>
        <strong>₹${subtotal.toLocaleString('en-IN')}</strong>
      </div>
      <div class="cart-summary-line delivery-free">
        <span>Delivery:</span>
        <span class="free-text">FREE (Pan-India)</span>
      </div>
      <div class="cart-summary-line cart-total-line">
        <span>${dict.total_amount || 'Total Amount'}:</span>
        <strong class="total-price-val">₹${subtotal.toLocaleString('en-IN')}</strong>
      </div>
    </div>
    <button class="btn btn-buy-now btn-checkout-full" onclick="proceedToCheckout()">
      <span>${dict.proceed_checkout || 'Proceed to Checkout'}</span>
      <svg class="icon arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
  `;
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartDrawerOverlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartDrawerOverlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function toggleCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer && drawer.classList.contains("open")) {
    closeCartDrawer();
  } else {
    openCartDrawer();
  }
}

function proceedToCheckout() {
  if (appState.cart.length === 0) {
    showToast("Cart is Empty", "Add some jewellery pieces to your cart first.");
    return;
  }
  closeCartDrawer();
  switchPage("checkout");
  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const container = document.getElementById("checkoutSummaryItems");
  const totalsBox = document.getElementById("checkoutSummaryTotals");
  if (!container || !totalsBox) return;

  const lang = appState.currentLang;
  const dict = translations[lang] || translations.en;

  if (appState.cart.length === 0) {
    container.innerHTML = `<p style="color: var(--text-light); text-align: center; padding: 1rem;">Your cart is empty.</p>`;
    totalsBox.innerHTML = "";
    return;
  }

  container.innerHTML = appState.cart.map(item => {
    const product = productsData.find(p => p.id === item.id);
    if (!product) return "";
    const name = product.name[lang] || product.name.en;
    const itemTotal = product.price * item.qty;

    return `
      <div class="chk-summary-item">
        <img src="${product.image}" alt="${name}" class="chk-item-img">
        <div class="chk-item-info">
          <div class="chk-item-name">${name}</div>
          <div class="chk-item-qty">Qty: ${item.qty} × ₹${product.price.toLocaleString('en-IN')}</div>
        </div>
        <div class="chk-item-price">₹${itemTotal.toLocaleString('en-IN')}</div>
      </div>
    `;
  }).join("");

  const subtotal = getCartSubtotal();
  totalsBox.innerHTML = `
    <div class="chk-line">
      <span>${dict.subtotal || 'Subtotal'}:</span>
      <span>₹${subtotal.toLocaleString('en-IN')}</span>
    </div>
    <div class="chk-line">
      <span>Express Shipping:</span>
      <span class="text-success" style="color: var(--emerald-700); font-weight:700;">FREE (Pan-India)</span>
    </div>
    <div class="chk-line chk-total-line">
      <span>${dict.total_amount || 'Total Amount Payable'}:</span>
      <strong class="chk-total-price">₹${subtotal.toLocaleString('en-IN')}</strong>
    </div>
  `;
}

function updatePaymentSelection(radioEl) {
  document.querySelectorAll(".payment-option-card").forEach(card => {
    card.classList.remove("active");
  });
  if (radioEl) {
    const card = radioEl.closest(".payment-option-card");
    if (card) card.classList.add("active");
  }
}

function handleOrderSubmit(e) {
  e.preventDefault();
  if (appState.cart.length === 0) {
    showToast("Cart Empty", "Please add items to cart before completing order.");
    return;
  }

  const name = document.getElementById("chkFullName").value.trim();
  const phone = document.getElementById("chkPhone").value.trim();
  const email = document.getElementById("chkEmail").value.trim();
  const address = document.getElementById("chkAddress").value.trim();
  const city = document.getElementById("chkCity").value.trim();
  const state = document.getElementById("chkState").value.trim();
  const pincode = document.getElementById("chkPincode").value.trim();

  const paymentOption = document.querySelector('input[name="paymentMethod"]:checked');
  const payMethodValue = paymentOption ? paymentOption.value : "upi";

  const paymentLabels = {
    upi: "📱 UPI / QR Code (Google Pay, PhonePe, Paytm)",
    card: "💳 Credit / Debit Card & NetBanking",
    cod: "💵 Cash on Delivery (COD)"
  };

  const orderId = "YV-" + Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const cartSnapshot = [...appState.cart];
  const subtotal = getCartSubtotal();
  const lang = appState.currentLang;

  // Render Order Confirmation Details
  const successContainer = document.getElementById("orderSuccessDetails");
  if (successContainer) {
    const itemsHTML = cartSnapshot.map(item => {
      const p = productsData.find(prod => prod.id === item.id);
      if (!p) return "";
      const pName = p.name[lang] || p.name.en;
      return `
        <div class="confirm-item-row">
          <span>${pName} (x${item.qty})</span>
          <strong>₹${(p.price * item.qty).toLocaleString('en-IN')}</strong>
        </div>
      `;
    }).join("");

    successContainer.innerHTML = `
      <div class="order-id-badge">Order ID: <strong>${orderId}</strong></div>
      <div class="order-date-text">Placed on ${orderDate}</div>

      <div class="order-confirmation-grid">
        <div class="order-box">
          <h4>📍 Shipping Address</h4>
          <p><strong>${name}</strong><br>
          ${address}<br>
          ${city}, ${state} - ${pincode}<br>
          📱 Phone: ${phone}${email ? '<br>✉️ Email: ' + email : ''}</p>
        </div>

        <div class="order-box">
          <h4>💳 Payment & Delivery</h4>
          <p><strong>Payment Method:</strong> ${paymentLabels[payMethodValue] || payMethodValue}<br>
          <strong>Payment Status:</strong> ${payMethodValue === 'cod' ? 'Pending (Pay on Delivery)' : 'Confirmed'}<br>
          <strong>Estimated Delivery:</strong> 3 - 5 Business Days</p>
        </div>
      </div>

      <div class="order-items-breakdown">
        <h4>🛍️ Order Items</h4>
        ${itemsHTML}
        <div class="confirm-total-line">
          <span>Total Amount:</span>
          <strong class="confirm-total-val">₹${subtotal.toLocaleString('en-IN')}</strong>
        </div>
      </div>
    `;
  }

  // Build structured WhatsApp order message
  let waMsg = `🛍️ *NEW WEBSITE ORDER - YOVA COLLECTIONS*\n`;
  waMsg += `*Order ID:* ${orderId}\n`;
  waMsg += `*Date:* ${orderDate}\n\n`;

  waMsg += `👤 *CUSTOMER DETAILS:*\n`;
  waMsg += `• *Name:* ${name}\n`;
  waMsg += `• *Phone:* ${phone}\n`;
  if (email) waMsg += `• *Email:* ${email}\n`;
  waMsg += `• *Address:* ${address}, ${city}, ${state} - ${pincode}\n\n`;

  waMsg += `💳 *PAYMENT METHOD:*\n`;
  waMsg += `• ${paymentLabels[payMethodValue] || payMethodValue}\n\n`;

  waMsg += `📦 *ORDERED ITEMS:*\n`;
  cartSnapshot.forEach((item, index) => {
    const p = productsData.find(prod => prod.id === item.id);
    if (p) {
      const pName = p.name[lang] || p.name.en;
      waMsg += `${index + 1}. *${pName}* (Qty: ${item.qty}) - ₹${(p.price * item.qty).toLocaleString('en-IN')}\n`;
    }
  });

  waMsg += `\n💰 *TOTAL AMOUNT:* ₹${subtotal.toLocaleString('en-IN')}\n`;
  waMsg += `🚚 *Shipping:* FREE (Pan-India Express Delivery)\n\n`;
  waMsg += `Please confirm order availability and dispatch details. Thank you!`;

  const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, "_blank");

  // Set pre-filled WhatsApp message on the "Order Confirmed" button
  const orderConfirmedBtn = document.getElementById("orderConfirmedWaBtn");
  if (orderConfirmedBtn) {
    orderConfirmedBtn.href = waUrl;
  }

  // Clear cart and update UI
  appState.cart = [];
  saveCart();

  // Navigate to confirmation page
  switchPage("order-success");
}

function showToast(title, message, image) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "cart-toast";
  toast.innerHTML = `
    ${image ? `<img src="${image}" alt="" class="toast-img">` : ''}
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${message}</div>
    </div>
    <button class="toast-btn" onclick="openCartDrawer(); this.parentElement.remove();">View Cart</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 9. PAGE NAVIGATION (ROUTER)
// ==========================================
function switchPage(pageId) {
  const pages = ["welcome", "home", "products", "about", "gallery", "contact", "checkout", "order-success"];
  if (!pages.includes(pageId)) pageId = "welcome";
  appState.activePage = pageId;

  // Toggle active class on page sections
  pages.forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.classList.toggle("active", p === pageId);
  });

  // Update desktop navigation links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  // Update mobile bottom bar
  document.querySelectorAll(".m-bar-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });

  // Update mobile drawer links
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterByCategory(cat) {
  appState.activeCategory = cat;
  document.querySelectorAll(".filter-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.category === cat);
  });
  renderProductsCatalog();
}

function resetFilters() {
  appState.activeCategory = "all";
  appState.searchQuery = "";
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  document.querySelectorAll(".filter-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.category === "all");
  });
  renderProductsCatalog();
}

// ==========================================
// 10. CONTACT FORM SUBMISSION VIA WHATSAPP
// ==========================================
function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const city = document.getElementById("custCity").value.trim();
  const interest = document.getElementById("jewelleryInterest").value;
  const msg = document.getElementById("custMessage").value.trim();

  const waText = `*New Jewellery Inquiry - Yova Collections*
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*City/State:* ${city}
*Category Interest:* ${interest}
*Message / Requirements:* ${msg || 'Interested in exploring designs & pricing.'}
----------------------------------------
(Sent via yovacollections.in)`;

  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waText)}`;
  window.open(url, "_blank");
}

// ==========================================
// 11. MOBILE DRAWER CONTROLS
// ==========================================
function openDrawer() {
  document.getElementById("mobileDrawer").classList.add("open");
  document.getElementById("drawerBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.getElementById("mobileDrawer").classList.remove("open");
  document.getElementById("drawerBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// 12. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Init & Detection
  initLanguage();

  // 2. Language Dropdown Toggle (Desktop)
  const langSelectorBtn = document.getElementById("langSelectorBtn");
  const langWrapper = document.querySelector(".lang-selector-wrapper");
  if (langSelectorBtn && langWrapper) {
    langSelectorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langWrapper.classList.toggle("open");
    });
  }

  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    if (langWrapper && !langWrapper.contains(e.target)) {
      langWrapper.classList.remove("open");
    }
  });

  // Language options inside dropdown
  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang, true);
      if (langWrapper) langWrapper.classList.remove("open");
    });
  });

  // Language pills inside mobile drawer
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang, true);
    });
  });

  // 3. Mobile Hamburger
  const mobileToggle = document.getElementById("mobileToggle");
  const drawerClose = document.getElementById("drawerClose");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  // 4. Product Catalog Category Pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      appState.activeCategory = pill.dataset.category;
      renderProductsCatalog();
    });
  });

  // 5. Product Search Input
  const searchInput = document.getElementById("productSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = e.target.value ? "block" : "none";
      }
      renderProductsCatalog();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        appState.searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderProductsCatalog();
      }
    });
  }

  // 6. Sort Selector
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      appState.sortBy = e.target.value;
      renderProductsCatalog();
    });
  }

  // 7. Gallery Category Filters
  document.querySelectorAll(".g-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".g-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.activeGalleryFilter = btn.dataset.gcat;
      renderGallery();
    });
  });

  // 8. Hash-based URL Routing (e.g. #products, #about)
  function handleHashChange() {
    const hash = window.location.hash.replace("#", "") || "home";
    switchPage(hash);
  }
  window.addEventListener("hashchange", handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  } else {
    switchPage("home");
  }

  // 9. Close Modals on Overlay Click or ESC
  window.addEventListener("click", (e) => {
    const qModal = document.getElementById("quickViewModal");
    const lModal = document.getElementById("galleryLightboxModal");
    if (e.target === qModal) closeQuickView();
    if (e.target === lModal) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      closeLightbox();
      closeDrawer();
    }
  });

  // 10. Initial Render
  initCart();
  renderFeaturedProducts();
  renderProductsCatalog();
  renderGallery();
});
