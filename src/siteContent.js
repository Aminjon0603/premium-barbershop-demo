const photoAssets = {
  storefrontDay: "/photos/mq-storefront-day.jpg",
  menuBoard: "/photos/mq-menu-board.jpg",
  storefrontNight: "/photos/mq-storefront-night.jpg",
};

export const siteContent = {
  en: {
    brandTagline: "Barber shop in East Harlem",
    headerMeta: ["East Harlem", "Open daily", "8 AM - 8 PM"],
    nav: [
      { href: "#photos", label: "Photos" },
      { href: "#services", label: "Services" },
      { href: "#visit", label: "Contact" },
    ],
    languageSwitchLabel: "Español",
    mobileServicesLabel: "Services",
    hero: {
      eyebrow: "MQ Barber Shop",
      title: "A real neighborhood barbershop with clear services and long daily hours.",
      text:
        "MQ Barber Shop at 224 E 116th St stays easy to understand from the first screen: real storefront photos, real pricing, and the phone number clients need before they stop in.",
      primaryCta: "Call now",
      secondaryCta: "Get directions",
    },
    photos: {
      main: {
        kicker: "Street view",
        title: "Clients can recognize the shop before they even reach the door.",
        text:
          "The daytime storefront photo makes the website feel grounded and helps first-time visitors know exactly what they are looking for on East 116th Street.",
        image: photoAssets.storefrontDay,
        alt: "MQ Barber Shop storefront during the day on East 116th Street",
      },
      supporting: [
        {
          id: "board",
          kicker: "Current menu board",
          title: "The sidewalk sign makes the service list feel real and immediate.",
          text:
            "Cuts, shaves, shape ups, eyebrows, color, relaxer, permanent, and highlight services are all visible from the street and reflected on the site.",
          image: photoAssets.menuBoard,
          alt: "MQ Barber Shop sidewalk menu board with listed services",
        },
        {
          id: "night",
          kicker: "Open late",
          title: "The night photo supports the daily 8 AM to 8 PM schedule.",
          text:
            "Showing the storefront after dark reinforces that MQ works for after-work visits and evening grooming.",
          image: photoAssets.storefrontNight,
          alt: "MQ Barber Shop storefront at night with the shop interior visible",
        },
      ],
    },
    quickFacts: [
      { value: "Open daily", label: "8:00 AM - 8:00 PM" },
      { value: "East Harlem", label: "224 E 116th St" },
      { value: "Call the shop", label: "(646) 454-0300" },
      { value: "Current prices", label: "Based on the posted menu" },
    ],
    notesSection: {
      eyebrow: "Why this structure works",
      title: "Real photos, real pricing, and key details clients can scan fast.",
      cardLabel: "Studio note",
    },
    studioNotes: [
      {
        title: "The storefront is recognizable",
        text:
          "A real exterior photo helps new clients find the right shop without guessing and gives the page more trust than generic stock imagery.",
      },
      {
        title: "The service board supports the menu",
        text:
          "The sidewalk sign backs up the listed services and pricing, so the site feels like an extension of the business instead of a separate polished fantasy.",
      },
      {
        title: "Late hours are easy to believe",
        text:
          "The night storefront shot makes the 8 AM to 8 PM schedule feel credible and useful for people planning an evening visit.",
      },
    ],
    servicesSection: {
      eyebrow: "Current services",
      title: "Services and prices clients can scan in seconds.",
      text:
        "These prices come from the current shop board. Color and chemical services can vary depending on hair, so clients should call first to confirm today's final pricing.",
    },
    serviceGroups: [
      { id: "core", title: "Cuts and quick services" },
      { id: "specialty", title: "Color and chemical services" },
    ],
    serviceNotice: {
      eyebrow: "Before you visit",
      title: "Need something not clearly listed on the board?",
      text:
        "If a client wants to ask about kids haircuts, beard trim work, or any service that is not clearly priced on the board, the best move is to call the shop directly before coming in.",
      items: ["Call to confirm current pricing", "Ask about kids cuts or beard work", "Verify color and chemical service timing"],
    },
    services: [
      {
        group: "core",
        name: "Haircut",
        price: "$30",
        note: "Core service",
        text: "A standard haircut for clients who want a clean result without extra add-ons.",
      },
      {
        group: "core",
        name: "Haircut + Shave",
        price: "$40",
        note: "Most complete",
        text: "A combined haircut and shave for people who want the full cleanup in one visit.",
      },
      {
        group: "core",
        name: "Shave",
        price: "$15",
        note: "Quick service",
        text: "A separate shave option for clients who do not need a full haircut at the same time.",
      },
      {
        group: "core",
        name: "Shape Up",
        price: "$15",
        note: "Line work",
        text: "A shape up for clients who want to keep the hairline and outline fresh between cuts.",
      },
      {
        group: "core",
        name: "Eyebrows",
        price: "$10",
        note: "Detail service",
        text: "A fast eyebrow cleanup that can be added to another visit or done on its own.",
      },
      {
        group: "specialty",
        name: "Hair Color",
        price: "$60-$80",
        note: "Color work",
        text: "Hair color service with pricing that depends on the amount of work and the final look.",
      },
      {
        group: "specialty",
        name: "Relaxer",
        price: "From $50",
        note: "Texture service",
        text: "Relaxer service with a starting price, with final cost confirmed by the shop.",
      },
      {
        group: "core",
        name: "Hair Wash",
        price: "$5",
        note: "Add-on",
        text: "A simple wash option for clients who want a cleaner finish before or after the cut.",
      },
      {
        group: "specialty",
        name: "Wash + Haircut",
        price: "$50-$55",
        note: "Combo service",
        text: "A wash and haircut package for clients who want both services handled together.",
      },
      {
        group: "specialty",
        name: "Permanent",
        price: "$60-$90",
        note: "Chemical service",
        text: "Permanent service with a range based on hair and the amount of work required.",
      },
      {
        group: "specialty",
        name: "Highlight",
        price: "$100-$150",
        note: "Specialty color",
        text: "Highlight service with pricing that varies by hair length, type, and desired finish.",
      },
    ],
    experienceSection: {
      eyebrow: "What to expect",
      title: "A simple flow built around choosing a service, calling the shop, and showing up informed.",
    },
    experienceSteps: [
      {
        step: "01",
        title: "Check the service list",
        text: "Clients can quickly see whether they need a haircut, shave, shape up, eyebrows, color, or a combo service.",
      },
      {
        step: "02",
        title: "Call if they need to confirm",
        text: "The phone number stays visible for availability questions, service confirmation, or up-to-date pricing on color work.",
      },
      {
        step: "03",
        title: "Show up knowing the place",
        text: "The storefront photos, address, and hours make it easier for first-time visitors to arrive without confusion.",
      },
    ],
    visitSection: {
      leftEyebrow: "Need the basics fast?",
      leftTitle: "Phone, address, and hours stay easy to find from top to bottom.",
      leftText:
        "The site keeps the practical details visible so people can call the shop, check the address, and plan around the daily hours without digging through the page.",
      rightEyebrow: "Visit MQ Barber Shop",
      rightTitle: "224 E 116th St, New York, NY 10029",
      rightText:
        "Call before you come in if you want to confirm availability, ask about a specific service, or check the latest pricing on color and chemical work.",
      callButton: "Call (646) 454-0300",
      directionsButton: "Get directions",
    },
    contactHighlights: [
      {
        title: "Call the shop",
        subtitle: "(646) 454-0300",
        text: "Use the shop number to ask about availability, service timing, or current pricing before you head over.",
      },
      {
        title: "Find the location",
        subtitle: "224 E 116th St",
        text: "The shop is in East Harlem, New York, NY 10029, and the storefront photos help new clients recognize it immediately.",
      },
      {
        title: "Plan around the hours",
        subtitle: "Open daily, 8 AM - 8 PM",
        text: "The long daily schedule gives clients more flexibility for workday, school-day, or evening visits.",
      },
    ],
    hours: [
      ["Monday", "8:00 AM - 8:00 PM"],
      ["Tuesday", "8:00 AM - 8:00 PM"],
      ["Wednesday", "8:00 AM - 8:00 PM"],
      ["Thursday", "8:00 AM - 8:00 PM"],
      ["Friday", "8:00 AM - 8:00 PM"],
      ["Saturday", "8:00 AM - 8:00 PM"],
      ["Sunday", "8:00 AM - 8:00 PM"],
    ],
    faqSection: {
      eyebrow: "FAQ",
      title: "Quick answers before clients call or stop by.",
    },
    faqs: [
      {
        question: "Where is MQ Barber Shop located?",
        answer: "MQ Barber Shop is located at 224 E 116th St, New York, NY 10029 in East Harlem.",
      },
      {
        question: "What are the shop hours?",
        answer: "The shop is open daily from 8:00 AM to 8:00 PM.",
      },
      {
        question: "What services are currently listed?",
        answer:
          "The current menu includes Haircut $30, Haircut + Shave $40, Shave $15, Shape Up $15, Eyebrows $10, Hair Color $60-$80, Relaxer from $50, Hair Wash $5, Wash + Haircut $50-$55, Permanent $60-$90, and Highlight $100-$150.",
      },
      {
        question: "Do all color and chemical services have a fixed price?",
        answer:
          "Not always. Hair Color, Relaxer, Permanent, and Highlight services can vary depending on hair, so it is best to call the shop for confirmation before coming in.",
      },
      {
        question: "What if I need a kids haircut or beard trim?",
        answer:
          "If you need a kids haircut, beard trim, or another service that is not clearly priced on the posted board, call the shop first to confirm availability and today's pricing.",
      },
      {
        question: "How do I confirm pricing or availability?",
        answer:
          "Call the shop at (646) 454-0300 to confirm today's availability, service timing, or any price questions before you visit.",
      },
    ],
    cta: {
      eyebrow: "Contact MQ",
      title: "Need a haircut, shave, shape up, or color service?",
      text:
        "Call MQ Barber Shop to check today's availability, ask about the current menu, or get directions before you head over.",
      primaryButton: "Call the shop",
      secondaryButton: "Get directions",
      detailsLabel: "Quick details",
      detailChips: ["Open daily", "8 AM - 8 PM", "224 E 116th St", "(646) 454-0300"],
    },
    footerHours: "Open daily 8:00 AM - 8:00 PM",
  },
  es: {
    brandTagline: "Barbería en East Harlem",
    headerMeta: ["East Harlem", "Abierto diario", "8 AM - 8 PM"],
    nav: [
      { href: "#photos", label: "Fotos" },
      { href: "#services", label: "Servicios" },
      { href: "#visit", label: "Contacto" },
    ],
    languageSwitchLabel: "English",
    mobileServicesLabel: "Servicios",
    hero: {
      eyebrow: "MQ Barber Shop",
      title: "Una barbería real del vecindario con servicios claros y horario amplio todos los días.",
      text:
        "MQ Barber Shop en 224 E 116th St se entiende desde la primera pantalla: fotos reales del local, precios reales y el número que los clientes necesitan antes de pasar.",
      primaryCta: "Llamar",
      secondaryCta: "Cómo llegar",
    },
    photos: {
      main: {
        kicker: "Vista de la calle",
        title: "Los clientes pueden reconocer el local antes de llegar a la puerta.",
        text:
          "La foto del frente durante el día hace que la página se sienta real y ayuda a los visitantes nuevos a ubicar el negocio fácilmente en East 116th Street.",
        image: photoAssets.storefrontDay,
        alt: "Fachada de MQ Barber Shop durante el día en East 116th Street",
      },
      supporting: [
        {
          id: "board",
          kicker: "Cartel de servicios",
          title: "El letrero de la acera hace que el menú se vea inmediato y real.",
          text:
            "Cortes, afeitados, shape up, cejas, color, relaxer, permanente y highlights aparecen en el cartel y también en la página.",
          image: photoAssets.menuBoard,
          alt: "Cartel de servicios de MQ Barber Shop en la acera",
        },
        {
          id: "night",
          kicker: "Abierto hasta tarde",
          title: "La foto de noche respalda el horario diario de 8 AM a 8 PM.",
          text:
            "Mostrar el local de noche ayuda a que el horario extendido se sienta creíble para clientes que van después del trabajo o por la tarde.",
          image: photoAssets.storefrontNight,
          alt: "Fachada de MQ Barber Shop de noche con el interior iluminado",
        },
      ],
    },
    quickFacts: [
      { value: "Abierto diario", label: "8:00 AM - 8:00 PM" },
      { value: "East Harlem", label: "224 E 116th St" },
      { value: "Llama al local", label: "(646) 454-0300" },
      { value: "Precios actuales", label: "Basados en el menú publicado" },
    ],
    notesSection: {
      eyebrow: "Por qué esta estructura funciona",
      title: "Fotos reales, precios reales y datos clave que se entienden rápido.",
      cardLabel: "Nota del local",
    },
    studioNotes: [
      {
        title: "El local es fácil de reconocer",
        text:
          "Una foto real del frente ayuda a nuevos clientes a encontrar la barbería correcta y transmite mucha más confianza que una imagen genérica.",
      },
      {
        title: "El cartel respalda el menú",
        text:
          "El letrero de la acera confirma los servicios y precios, así que la página se siente como una extensión del negocio real.",
      },
      {
        title: "El horario largo se siente real",
        text:
          "La foto nocturna del local hace que el horario de 8 AM a 8 PM se vea creíble y útil para visitas después del trabajo.",
      },
    ],
    servicesSection: {
      eyebrow: "Servicios actuales",
      title: "Servicios y precios fáciles de revisar en segundos.",
      text:
        "Estos precios salen del cartel actual. Los servicios de color y químicos pueden variar según el cabello, así que es mejor llamar antes para confirmar el precio final del día.",
    },
    serviceGroups: [
      { id: "core", title: "Cortes y servicios rápidos" },
      { id: "specialty", title: "Color y servicios químicos" },
    ],
    serviceNotice: {
      eyebrow: "Antes de venir",
      title: "¿Necesitas algo que no aparece claro en el cartel?",
      text:
        "Si un cliente quiere preguntar por cortes para niños, trabajo de barba o un servicio que no tiene precio claro en el cartel, lo mejor es llamar al local antes de venir.",
      items: ["Llama para confirmar precios", "Pregunta por cortes para niños o barba", "Confirma tiempos de color o químicos"],
    },
    services: [
      {
        group: "core",
        name: "Corte de pelo",
        price: "$30",
        note: "Servicio principal",
        text: "Un corte estándar para clientes que quieren un resultado limpio sin extras.",
      },
      {
        group: "core",
        name: "Corte + afeitado",
        price: "$40",
        note: "Servicio completo",
        text: "Corte y afeitado en una sola visita para quien busca la limpieza completa.",
      },
      {
        group: "core",
        name: "Afeitado",
        price: "$15",
        note: "Servicio rápido",
        text: "Opción de afeitado para clientes que no necesitan un corte completo al mismo tiempo.",
      },
      {
        group: "core",
        name: "Shape up / perfilado",
        price: "$15",
        note: "Líneas",
        text: "Perfilado para mantener la línea y el contorno limpios entre cortes.",
      },
      {
        group: "core",
        name: "Cejas",
        price: "$10",
        note: "Detalle",
        text: "Servicio rápido de cejas que se puede agregar a otra visita o hacer por separado.",
      },
      {
        group: "specialty",
        name: "Color de cabello",
        price: "$60-$80",
        note: "Color",
        text: "Servicio de color con precio que depende del trabajo y del resultado deseado.",
      },
      {
        group: "specialty",
        name: "Relaxer / alisado",
        price: "Desde $50",
        note: "Textura",
        text: "Servicio de relaxer con precio inicial, con costo final confirmado directamente por el local.",
      },
      {
        group: "core",
        name: "Lavado",
        price: "$5",
        note: "Extra",
        text: "Lavado sencillo para clientes que quieren una terminación más limpia antes o después del corte.",
      },
      {
        group: "specialty",
        name: "Lavado + corte",
        price: "$50-$55",
        note: "Combinado",
        text: "Paquete de lavado y corte para hacer ambos servicios en una sola visita.",
      },
      {
        group: "specialty",
        name: "Permanente",
        price: "$60-$90",
        note: "Químico",
        text: "Servicio de permanente con rango de precio según el cabello y el trabajo necesario.",
      },
      {
        group: "specialty",
        name: "Highlights / mechas",
        price: "$100-$150",
        note: "Color especial",
        text: "Servicio de mechas con precio variable según largo, tipo de cabello y resultado final.",
      },
    ],
    experienceSection: {
      eyebrow: "Qué esperar",
      title: "Un flujo simple pensado para ver el servicio, llamar al local y llegar con claridad.",
    },
    experienceSteps: [
      {
        step: "01",
        title: "Revisa el menú",
        text: "Los clientes pueden ver rápido si necesitan corte, afeitado, shape up, cejas, color o un servicio combinado.",
      },
      {
        step: "02",
        title: "Llama si quieres confirmar",
        text: "El número siempre está visible para consultar disponibilidad, tiempos o precios actualizados en servicios de color.",
      },
      {
        step: "03",
        title: "Llega sabiendo dónde vas",
        text: "Las fotos del local, la dirección y el horario ayudan a que visitantes nuevos lleguen sin confusión.",
      },
    ],
    visitSection: {
      leftEyebrow: "¿Necesitas lo básico rápido?",
      leftTitle: "Teléfono, dirección y horario se mantienen visibles de principio a fin.",
      leftText:
        "La página mantiene los datos prácticos al frente para que la gente pueda llamar, revisar la dirección y planear la visita sin perder tiempo buscando.",
      rightEyebrow: "Visita MQ Barber Shop",
      rightTitle: "224 E 116th St, New York, NY 10029",
      rightText:
        "Llama antes de venir si quieres confirmar disponibilidad, preguntar por un servicio específico o revisar el precio más reciente de color o químicos.",
      callButton: "Llamar al (646) 454-0300",
      directionsButton: "Cómo llegar",
    },
    contactHighlights: [
      {
        title: "Llama al local",
        subtitle: "(646) 454-0300",
        text: "Usa el número del negocio para preguntar por disponibilidad, tiempo de atención o precios actualizados antes de salir.",
      },
      {
        title: "Ubicación clara",
        subtitle: "224 E 116th St",
        text: "El local está en East Harlem, New York, NY 10029, y las fotos ayudan a reconocerlo de inmediato.",
      },
      {
        title: "Horario amplio",
        subtitle: "Abierto diario, 8 AM - 8 PM",
        text: "El horario extendido da más flexibilidad para visitas antes del trabajo, después de clases o por la noche.",
      },
    ],
    hours: [
      ["Lunes", "8:00 AM - 8:00 PM"],
      ["Martes", "8:00 AM - 8:00 PM"],
      ["Miércoles", "8:00 AM - 8:00 PM"],
      ["Jueves", "8:00 AM - 8:00 PM"],
      ["Viernes", "8:00 AM - 8:00 PM"],
      ["Sábado", "8:00 AM - 8:00 PM"],
      ["Domingo", "8:00 AM - 8:00 PM"],
    ],
    faqSection: {
      eyebrow: "Preguntas frecuentes",
      title: "Respuestas rápidas antes de llamar o pasar por el local.",
    },
    faqs: [
      {
        question: "¿Dónde está MQ Barber Shop?",
        answer: "MQ Barber Shop está en 224 E 116th St, New York, NY 10029, en East Harlem.",
      },
      {
        question: "¿Cuál es el horario?",
        answer: "La barbería abre todos los días de 8:00 AM a 8:00 PM.",
      },
      {
        question: "¿Qué servicios aparecen actualmente?",
        answer:
          "El menú actual incluye corte $30, corte + afeitado $40, afeitado $15, shape up $15, cejas $10, color $60-$80, relaxer desde $50, lavado $5, lavado + corte $50-$55, permanente $60-$90 y highlights $100-$150.",
      },
      {
        question: "¿Todos los servicios de color y químicos tienen precio fijo?",
        answer:
          "No siempre. Color, relaxer, permanente y highlights pueden variar según el cabello, así que conviene llamar antes para confirmar el precio final.",
      },
      {
        question: "¿Y si necesito corte para niño o barba?",
        answer:
          "Si necesitas corte para niño, barba u otro servicio que no aparece claramente con precio en el cartel, llama primero para confirmar disponibilidad y precio del día.",
      },
      {
        question: "¿Cómo confirmo disponibilidad o precios?",
        answer:
          "Llama al (646) 454-0300 para confirmar disponibilidad, tiempos o cualquier duda de precio antes de visitar el local.",
      },
    ],
    cta: {
      eyebrow: "Contacto MQ",
      title: "¿Necesitas corte, afeitado, shape up o color?",
      text:
        "Llama a MQ Barber Shop para confirmar la disponibilidad de hoy, preguntar por el menú actual o recibir indicaciones antes de ir.",
      primaryButton: "Llamar al local",
      secondaryButton: "Cómo llegar",
      detailsLabel: "Datos rápidos",
      detailChips: ["Abierto diario", "8 AM - 8 PM", "224 E 116th St", "(646) 454-0300"],
    },
    footerHours: "Abierto diario 8:00 AM - 8:00 PM",
  },
};

export function getSiteContent(locale = "en") {
  return siteContent[locale] ?? siteContent.en;
}
