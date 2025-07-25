// ===== DATOS DEL SÍLABO =====
const syllabusData = {
  topics: [
    {
      id: "semana1",
      title:
        "Semana 1: Socialización del sílabo, normatividad, normas internacionales, citas y referencias, y método científico",
      summary: `
                <p><strong>Bienvenido/a a la Semana 1 de Metodología de la Investigación Científica.</strong></p>
                <p>En esta primera semana, nos familiarizaremos con la estructura del curso (socialización del sílabo) y estableceremos las bases éticas y formales para la investigación:</p>
                <ul>
                    <li><strong>Normatividad:</strong> Comprenderemos las regulaciones y directrices institucionales y generales que rigen la investigación académica.</li>
                    <li><strong>Normas Internacionales de Escritura:</strong> Introduciremos los estándares globales para la redacción científica, asegurando claridad, precisión y uniformidad. Hablaremos brevemente de estilos como APA, Vancouver, etc., y su importancia.</li>
                    <li><strong>Citas y Referencias:</strong> Aprenderemos la importancia fundamental de citar correctamente las fuentes para evitar el plagio y dar crédito a otros autores. Veremos los componentes básicos de una cita y una referencia bibliográfica. <em>(Ejemplo: Citar un libro vs. un artículo)</em>.</li>
                    <li><strong>Método Científico:</strong> Revisaremos los pasos esenciales del método científico (observación, pregunta, hipótesis, experimentación, análisis, conclusión) como el pilar del conocimiento riguroso y verificable en todas las disciplinas.</li>
                </ul>
                <p>Esta semana sienta las bases para desarrollar una investigación ética, bien fundamentada y comunicada de manera profesional.</p>
                <hr>
                <p><em>Material complementario sugerido: Revisar el sílabo completo del curso, buscar ejemplos de normas APA 7ma edición.</em></p>
            `,
      questions: [
        {
          question: "¿Cuál es el propósito principal de la socialización del sílabo?",
          options: [
            "Evaluar el conocimiento previo de los estudiantes",
            "Presentar la estructura, contenidos, evaluación y reglas del curso",
            "Asignar los primeros trabajos prácticos",
            "Memorizar las fechas de los exámenes",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Las normas internacionales de escritura (como APA, Vancouver) buscan principalmente:",
          options: [
            "Hacer los textos más difíciles de leer",
            "Asegurar la uniformidad, claridad y facilitar la comprensión de la comunicación científica",
            "Limitar la creatividad del investigador",
            "Aumentar el número de páginas de un trabajo",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "¿Por qué es fundamental citar las fuentes en una investigación?",
          options: [
            "Para cumplir un requisito formal sin importancia real",
            "Para evitar el plagio y reconocer el trabajo de otros autores",
            "Para demostrar que se ha leído mucho, aunque no sea relevante",
            "Para confundir al lector",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "El método científico se caracteriza por ser:",
          options: [
            "Intuitivo y basado en opiniones personales",
            "Rígido e inmutable a través del tiempo",
            "Sistemático, empírico y sujeto a revisión",
            "Exclusivo para las ciencias exactas",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "¿Qué es el plagio en el contexto académico?",
          options: [
            "Un error tipográfico menor",
            "Presentar ideas, palabras o trabajos de otros como si fueran propios sin dar crédito",
            "Citar demasiadas fuentes",
            "Usar normas de citación diferentes a las indicadas",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Generalmente, el primer paso del método científico es:",
          options: [
            "La conclusión",
            "La experimentación",
            "La observación y el planteamiento de una pregunta/problema",
            "La formulación de la hipótesis",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "¿Qué incluye típicamente una referencia bibliográfica completa?",
          options: [
            "Solo el nombre del autor",
            "Autor, año, título, fuente (revista, libro, URL, etc.)",
            "El resumen del trabajo",
            "La opinión del investigador sobre la fuente",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "La normatividad en investigación se refiere a:",
          options: [
            "Las normas de convivencia en el laboratorio",
            "Las reglas y directrices éticas y legales que regulan la actividad investigadora",
            "Las preferencias personales del tutor de tesis",
            "El formato específico para imprimir el informe final",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Una característica clave del conocimiento obtenido mediante el método científico es que es:",
          options: [
            "Absoluto y definitivo",
            "Basado en la fe",
            "Verificable y falible (puede ser corregido o refutado)",
            "Secreto y no divulgable",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "¿Cuál es la diferencia principal entre una cita en el texto y la lista de referencias final?",
          options: [
            "No hay diferencia, son lo mismo",
            "La cita es una mención breve en el texto (Autor, año), la referencia contiene los datos completos al final",
            "La referencia va en el texto y la cita al final",
            "Las citas son solo para libros, las referencias para artículos",
          ],
          correctAnswerIndex: 1,
        },
      ],
    },
    {
      id: "semana2",
      title: "Semana 2: Identificación y formulación del problema, justificación y objetivos de investigación",
      summary: `
                <p><strong>Semana 2: El Corazón de la Investigación.</strong></p>
                <p>Esta semana nos centramos en definir qué vamos a investigar y por qué es importante hacerlo. Abordaremos:</p>
                <ul>
                    <li><strong>Identificación del Problema:</strong> ¿De dónde surgen las ideas? Exploraremos fuentes como la observación de la realidad, la revisión de literatura (vacíos de conocimiento), experiencias previas y necesidades prácticas. Discutiremos cómo pasar de un área temática amplia a un problema específico.</li>
                    <li><strong>Formulación del Problema:</strong> Aprenderemos a enunciar el problema de forma clara y precisa, generalmente como una pregunta (pregunta de investigación principal). Debe ser delimitado (en tiempo, espacio, alcance) y viable. <em>(Ejemplo: Pasar de "problemas educativos" a "¿Cómo afecta el uso de tablets el rendimiento en matemáticas de niños de 3er grado en Lima Metropolitana durante 2024?")</em>.</li>
                    <li><strong>Justificación:</strong> Argumentaremos la importancia y relevancia de investigar dicho problema. ¿Por qué vale la pena? Consideraremos su conveniencia, relevancia social, implicaciones prácticas, valor teórico y utilidad metodológica.</li>
                    <li><strong>Objetivos de Investigación:</strong> Definiremos las metas que buscamos alcanzar con el estudio. Se redactan con verbos en infinitivo (analizar, describir, comparar, proponer...). Distinguiremos entre el <strong>Objetivo General</strong> (propósito central) y los <strong>Objetivos Específicos</strong> (pasos concretos para alcanzar el general). Deben ser claros, medibles, alcanzables, relevantes y tener un tiempo definido (SMART).</li>
                </ul>
                <p>Un problema bien formulado y justificado, junto con objetivos claros, son la guía fundamental de todo el proceso investigador.</p>
                 <hr>
                <p><em>Material complementario sugerido: Buscar ejemplos de planteamientos del problema en tesis o artículos científicos. Practicar la redacción de objetivos SMART.</em></p>
            `,
      questions: [
        {
          question: "¿Qué es un 'vacío de conocimiento' en la identificación de problemas de investigación?",
          options: [
            "Un tema del que nadie quiere hablar",
            "Un área donde falta investigación o los resultados son contradictorios",
            "Un error en la teoría existente",
            "La falta de acceso a bibliotecas",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Formular un problema de investigación implica principalmente:",
          options: [
            "Escribir una historia interesante",
            "Expresarlo como una pregunta clara, delimitada y susceptible de ser investigada",
            "Listar todas las dificultades encontradas",
            "Proponer una solución inmediata",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "La justificación de una investigación debe responder a la pregunta:",
          options: [
            "¿Cómo se va a hacer?",
            "¿Quién la va a financiar?",
            "¿Por qué es importante y relevante realizarla?",
            "¿Cuáles son los resultados esperados?",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "Los objetivos de investigación deben empezar con:",
          options: [
            "Un número",
            "Una pregunta",
            "Un verbo en infinitivo (ej. 'analizar', 'describir')",
            "El nombre del investigador",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "En los criterios SMART para objetivos, ¿qué significa la 'M'?",
          options: ["Motivador", "Metodológico", "Medible", "Mundial"],
          correctAnswerIndex: 2,
        },
        {
          question: "La delimitación del problema ayuda a:",
          options: [
            "Hacer la investigación más complicada",
            "Especificar el alcance y los límites del estudio (temporal, espacial, temático)",
            "Ignorar detalles importantes",
            "Incluir todas las variables posibles",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "¿Cuál es la relación entre el objetivo general y los objetivos específicos?",
          options: [
            "Son independientes entre sí",
            "El general es un resumen de los específicos",
            "Los específicos son pasos o componentes necesarios para alcanzar el general",
            "El general se formula al final, los específicos al inicio",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "La viabilidad de un problema de investigación se refiere a:",
          options: [
            "Su popularidad en redes sociales",
            "La posibilidad real de llevar a cabo el estudio (recursos, tiempo, acceso, ética)",
            "Lo interesante que le parece al investigador",
            "La cantidad de teoría existente sobre el tema",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Una pregunta de investigación bien formulada debe ser:",
          options: [
            "Ambígua y general",
            "Retórica (que no necesite respuesta)",
            "Específica, clara y que implique una posibilidad de respuesta empírica",
            "Tan compleja que nadie pueda entenderla",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "La relevancia social en la justificación se refiere a:",
          options: [
            "Cuánta gente conoce al investigador",
            "El impacto o beneficio potencial del estudio para la sociedad o un grupo específico",
            "Si el tema está de moda",
            "El número de veces que se comparte en redes",
          ],
          correctAnswerIndex: 1,
        },
      ],
    },
    {
      id: "semana3",
      title: "Semana 3: Búsqueda de información, antecedentes de investigación y teorías que sustentan el estudio",
      summary: `
                <p><strong>Semana 3: Construyendo los Cimientos Teóricos.</strong></p>
                <p>Una vez definido el problema y los objetivos, necesitamos fundamentar nuestro estudio en el conocimiento existente. Esta semana nos enfocamos en:</p>
                <ul>
                    <li><strong>Búsqueda de Información:</strong> Aprenderemos estrategias eficientes para encontrar literatura científica relevante. Utilizaremos bases de datos académicas (Scopus, Web of Science, SciELO, Google Scholar), bibliotecas digitales y otras fuentes confiables. Discutiremos el uso de palabras clave, operadores booleanos (AND, OR, NOT) y filtros de búsqueda. Distinguiremos entre fuentes primarias (artículos originales, tesis) y secundarias (revisiones, libros de texto).</li>
                    <li><strong>Antecedentes de Investigación:</strong> Analizaremos estudios previos directamente relacionados con nuestro problema. No se trata solo de resumir, sino de identificar qué se ha hecho, cómo se ha hecho, qué resultados se obtuvieron y qué aspectos quedaron pendientes. Esto nos ayuda a contextualizar nuestro trabajo y a no "reinventar la rueda".</li>
                    <li><strong>Teorías que Sustentan el Estudio (Bases Teóricas):</strong> Identificaremos y expondremos las teorías o modelos conceptuales que explican el fenómeno que estamos investigando. Estas teorías proporcionan el marco interpretativo para nuestros hallazgos. <em>(Ejemplo: Si investigamos sobre motivación estudiantil, podríamos basarnos en la Teoría de la Autodeterminación).</em></li>
                </ul>
                <p>Este conjunto (antecedentes + bases teóricas) forma el núcleo del <strong>Marco Teórico</strong>, que da soporte y profundidad a nuestra investigación.</p>
                 <hr>
                <p><em>Material complementario sugerido: Explorar las bases de datos suscritas por la universidad. Practicar búsquedas con operadores booleanos. Leer la sección de marco teórico de artículos relacionados con un tema de interés.</em></p>
            `,
      questions: [
        {
          question: "¿Qué son las fuentes primarias en la búsqueda de información?",
          options: [
            "Resúmenes encontrados en blogs",
            "Artículos de investigación originales, tesis, reportes técnicos directos",
            "Enciclopedias y libros de texto generales",
            "Artículos de opinión en periódicos",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "¿Para qué sirven los operadores booleanos (AND, OR, NOT) en las bases de datos?",
          options: [
            "Para decorar los resultados de búsqueda",
            "Para combinar o excluir términos de búsqueda y refinar los resultados",
            "Para traducir los artículos automáticamente",
            "Para verificar la autenticidad de las fuentes",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Los antecedentes de investigación en el marco teórico deben:",
          options: [
            "Ser una copia exacta de los resúmenes de otros estudios",
            "Criticar negativamente todos los estudios previos",
            "Analizar estudios previos relevantes, mostrando su relación con el problema actual",
            "Incluir solo estudios realizados hace más de 20 años",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "Las bases teóricas de una investigación consisten en:",
          options: [
            "Las opiniones personales del investigador sobre el tema",
            "Las teorías y modelos conceptuales que explican o enmarcan el fenómeno estudiado",
            "El listado de todos los libros consultados",
            "La descripción detallada de la metodología a usar",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Una base de datos académica como Scopus o Web of Science es útil porque:",
          options: [
            "Contiene principalmente noticias y entretenimiento",
            "Indexa una gran cantidad de literatura científica revisada por pares",
            "Ofrece descargas gratuitas de cualquier libro",
            "Permite publicar investigaciones sin revisión",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Al revisar los antecedentes, ¿qué aspecto es importante analizar además de los resultados?",
          options: [
            "El diseño de la portada del estudio",
            "La metodología utilizada en esos estudios previos",
            "La biografía completa de los autores",
            "El costo de la investigación previa",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "El propósito principal del Marco Teórico es:",
          options: [
            "Presentar los resultados finales",
            "Describir cómo se recolectaron los datos",
            "Proporcionar el sustento conceptual y contextual de la investigación",
            "Listar los agradecimientos",
          ],
          correctAnswerIndex: 2,
        },
        {
          question: "¿Qué significa que una fuente sea 'revisada por pares' (peer-reviewed)?",
          options: [
            "Que ha sido leída por amigos del autor",
            "Que ha sido evaluada críticamente por expertos en el campo antes de su publicación",
            "Que está disponible gratuitamente en internet",
            "Que contiene muchas citas",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "Identificar teorías relevantes ayuda al investigador a:",
          options: [
            "Hacer el trabajo más largo",
            "Interpretar sus propios hallazgos y relacionarlos con el conocimiento existente",
            "Evitar la recolección de datos",
            "Seleccionar la muestra",
          ],
          correctAnswerIndex: 1,
        },
        {
          question: "¿Por qué es importante usar palabras clave (keywords) adecuadas en la búsqueda?",
          options: [
            "Para limitar los resultados a un solo artículo",
            "Para encontrar la información más relevante y específica para nuestro tema",
            "Para demostrar que conocemos términos técnicos",
            "No es importante, cualquier palabra funciona igual",
          ],
          correctAnswerIndex: 1,
        },
      ],
    },
  ],
}

// ===== VARIABLES DE ESTADO =====
let currentView = "login"
let selectedCourse = null
let selectedTopic = null
let timerInterval = null
let timeLeft = 15 * 60 // 15 minutos en segundos
let userAnswers = {}
let currentQuizQuestions = []
let userEmail = null
let userName = null
let userRole = "student" // Por defecto, el usuario es estudiante
let chatHistory = [] // Almacenar mensajes de chat para el contexto
let isGeneratingSummary = false // Control para la generación de resúmenes
let isGeneratingQuestions = false // Control para la generación de preguntas
let currentTheme = localStorage.getItem("theme") || "light" // Tema actual

// ===== CONFIGURACIÓN DE LA IA =====
const API_KEY = "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" // Key API
const API_URL = "https://openrouter.ai/api/v1/chat/completions"
const AI_MODEL = "deepseek/deepseek-prover-v2:free"

// ===== DATOS DE CURSOS =====
const coursesData = [
  {
    id: "arquitectura",
    title: "Arquitectura de Software",
    description: "Principios y patrones para el diseño de sistemas de software escalables y mantenibles.",
    icon: "fa-building",
    color: "#e67e22",
    topics: [
      {
        id: "arq-semana1",
        title: "Semana 1: Introducción a la Arquitectura de Software",
        summary: `
          La arquitectura de software es la estructura fundamental que define cómo se organizan los componentes de un sistema y cómo interactúan entre sí. Esta disciplina establece las bases para el desarrollo de sistemas robustos, escalables y mantenibles.

          En esta primera semana, exploraremos los conceptos básicos de la arquitectura de software, su importancia en el ciclo de desarrollo y los diferentes estilos arquitectónicos más utilizados en la industria. Comprenderemos cómo una buena arquitectura puede mejorar la calidad del software y reducir los costos de mantenimiento a largo plazo.

          Analizaremos también el rol del arquitecto de software, sus responsabilidades y las habilidades necesarias para desempeñar esta función clave en los equipos de desarrollo modernos.
        `,
        questions: [
          {
            question: "¿Cuál es el principal objetivo de la arquitectura de software?",
            options: [
              "Crear interfaces de usuario atractivas",
              "Definir la estructura fundamental y las interacciones entre componentes del sistema",
              "Optimizar algoritmos para máximo rendimiento",
              "Documentar el código fuente",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Qué característica NO es típicamente responsabilidad del arquitecto de software?",
            options: [
              "Seleccionar los patrones de diseño apropiados",
              "Programar todas las funcionalidades del sistema",
              "Evaluar requisitos no funcionales como escalabilidad y seguridad",
              "Definir interfaces entre componentes",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Por qué es importante la arquitectura de software en proyectos grandes?",
            options: [
              "Porque hace que el código se ejecute más rápido",
              "Porque reduce la necesidad de pruebas",
              "Porque facilita la comprensión, evolución y mantenimiento del sistema",
              "Porque elimina la necesidad de documentación",
            ],
            correctAnswerIndex: 2,
          },
        ],
      },
      {
        id: "arq-semana2",
        title: "Semana 2: Patrones Arquitectónicos",
        summary: `
          Los patrones arquitectónicos son soluciones probadas a problemas recurrentes en la arquitectura de software. Representan buenas prácticas que han evolucionado a lo largo del tiempo y proporcionan un vocabulario común para los arquitectos.

          En esta semana, estudiaremos en profundidad los patrones arquitectónicos más importantes como Capas, Cliente-Servidor, Modelo-Vista-Controlador (MVC), Microservicios, y Arquitectura Orientada a Servicios (SOA). Para cada patrón, analizaremos sus componentes, relaciones, ventajas, desventajas y casos de uso apropiados.

          También aprenderemos a seleccionar el patrón adecuado según los requisitos específicos del proyecto y cómo combinar diferentes patrones para resolver problemas complejos.
        `,
        questions: [
          {
            question:
              "¿Qué patrón arquitectónico divide la aplicación en presentación, lógica de negocio y acceso a datos?",
            options: [
              "Microservicios",
              "Arquitectura por capas",
              "Arquitectura basada en eventos",
              "Arquitectura peer-to-peer",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "La arquitectura de microservicios se caracteriza por:",
            options: [
              "Un monolito que contiene toda la funcionalidad",
              "Servicios pequeños e independientes que se comunican a través de APIs",
              "Una estructura rígida que dificulta los cambios",
              "La necesidad de desplegar toda la aplicación en cada actualización",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Cuál es una ventaja del patrón MVC (Modelo-Vista-Controlador)?",
            options: [
              "Simplifica el desarrollo al mezclar la lógica de negocio con la interfaz",
              "Reduce la necesidad de pruebas unitarias",
              "Permite la separación de responsabilidades y facilita el mantenimiento",
              "Elimina la necesidad de bases de datos",
            ],
            correctAnswerIndex: 2,
          },
        ],
      },
      {
        id: "arq-semana3",
        title: "Semana 3: Calidad y Evaluación Arquitectónica",
        summary: `
          La calidad de una arquitectura de software determina en gran medida la calidad del producto final. Es crucial evaluar sistemáticamente las decisiones arquitectónicas para asegurar que cumplen con los requisitos establecidos.

          Durante esta semana, exploraremos los atributos de calidad como rendimiento, seguridad, disponibilidad, modificabilidad y usabilidad. Aprenderemos métodos para evaluar arquitecturas, incluyendo el Método de Análisis de Compensaciones Arquitectónicas (ATAM) y el Análisis de Costo-Beneficio.

          También estudiaremos cómo documentar adecuadamente una arquitectura utilizando diferentes vistas (lógica, de proceso, de desarrollo, física) y notaciones como UML y C4, para comunicar efectivamente las decisiones arquitectónicas a diferentes audiencias.
        `,
        questions: [
          {
            question: "¿Qué es ATAM en el contexto de la arquitectura de software?",
            options: [
              "Un lenguaje de programación para arquitectos",
              "Un método para evaluar arquitecturas basado en atributos de calidad",
              "Una herramienta de modelado UML",
              "Un framework de desarrollo ágil",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Cuál de los siguientes NO es un atributo de calidad típico en arquitectura de software?",
            options: ["Rendimiento", "Seguridad", "Popularidad en redes sociales", "Modificabilidad"],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Por qué es importante documentar una arquitectura de software?",
            options: [
              "Para cumplir con requisitos legales únicamente",
              "Para aumentar el costo del proyecto",
              "Para comunicar decisiones y facilitar el entendimiento entre stakeholders",
              "Porque es obligatorio en todos los proyectos de software",
            ],
            correctAnswerIndex: 2,
          },
        ],
      },
    ],
  },
  {
    id: "cloud",
    title: "Computación en la Nube",
    description: "Fundamentos y aplicaciones de servicios en la nube, virtualización y contenedores.",
    icon: "fa-cloud",
    color: "#3498db",
    topics: [
      {
        id: "cloud-semana1",
        title: "Semana 1: Fundamentos de la Computación en la Nube",
        summary: `
          La computación en la nube representa un cambio paradigmático en la forma en que se entregan y consumen los recursos informáticos. En lugar de mantener servidores físicos y centros de datos, las organizaciones pueden acceder a recursos computacionales bajo demanda a través de internet.

          En esta primera semana, exploraremos los conceptos fundamentales de la computación en la nube, incluyendo sus características esenciales: autoservicio bajo demanda, amplio acceso a la red, agrupación de recursos, elasticidad rápida y servicio medido.

          También estudiaremos los diferentes modelos de servicio (IaaS, PaaS, SaaS) y modelos de implementación (público, privado, híbrido, comunitario), así como las ventajas y desafíos que presenta la adopción de la nube para las organizaciones modernas.
        `,
        questions: [
          {
            question: "¿Cuál de los siguientes NO es un modelo de servicio en la nube?",
            options: [
              "Infraestructura como Servicio (IaaS)",
              "Plataforma como Servicio (PaaS)",
              "Software como Servicio (SaaS)",
              "Hardware como Servicio (HaaS)",
            ],
            correctAnswerIndex: 3,
          },
          {
            question:
              "¿Qué característica de la computación en la nube permite aumentar o disminuir recursos rápidamente según la demanda?",
            options: ["Servicio medido", "Elasticidad", "Agrupación de recursos", "Autoservicio bajo demanda"],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Cuál es la principal diferencia entre la nube pública y la nube privada?",
            options: [
              "La nube pública es gratuita mientras que la privada es de pago",
              "La nube pública está disponible para cualquier usuario, mientras que la privada es exclusiva para una organización",
              "La nube pública solo permite almacenar datos, mientras que la privada permite ejecutar aplicaciones",
              "La nube pública es más segura que la privada",
            ],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        id: "cloud-semana2",
        title: "Semana 2: Proveedores de Servicios en la Nube",
        summary: `
          El mercado de servicios en la nube está dominado por varios proveedores importantes, cada uno con sus propias fortalezas, servicios y modelos de precios. Comprender las diferencias entre estos proveedores es esencial para seleccionar la plataforma adecuada para cada caso de uso.

          Durante esta semana, analizaremos en detalle los principales proveedores de servicios en la nube: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), IBM Cloud y otros. Estudiaremos sus servicios más destacados, arquitecturas de referencia, modelos de precios y casos de uso ideales.

          También aprenderemos estrategias para evitar el bloqueo de proveedores (vendor lock-in) y exploraremos enfoques multi-nube que permiten aprovechar lo mejor de diferentes plataformas.
        `,
        questions: [
          {
            question: "¿Cuál de los siguientes NO es uno de los principales proveedores de servicios en la nube?",
            options: [
              "Amazon Web Services (AWS)",
              "Microsoft Azure",
              "Google Cloud Platform (GCP)",
              "Adobe Cloud Services",
            ],
            correctAnswerIndex: 3,
          },
          {
            question: "¿Qué es el 'vendor lock-in' en el contexto de la computación en la nube?",
            options: [
              "Una característica de seguridad que bloquea el acceso no autorizado",
              "La dependencia excesiva de un proveedor específico que dificulta cambiar a otro",
              "Un contrato que garantiza precios fijos durante un período",
              "Un sistema de autenticación de dos factores",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Qué servicio de AWS proporciona capacidad de cómputo redimensionable en la nube?",
            options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "Amazon Lambda"],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        id: "cloud-semana3",
        title: "Semana 3: Virtualización y Contenedores",
        summary: `
          La virtualización y los contenedores son tecnologías fundamentales que hacen posible la computación en la nube moderna. Permiten utilizar eficientemente los recursos de hardware y facilitan la implementación, escalabilidad y portabilidad de las aplicaciones.

          En esta semana, estudiaremos los conceptos básicos de la virtualización, incluyendo hipervisores tipo 1 y tipo 2, máquinas virtuales y sus componentes. Compararemos este enfoque tradicional con la tecnología de contenedores, explorando en detalle Docker, su arquitectura, comandos básicos y mejores prácticas.

          También analizaremos las plataformas de orquestación de contenedores como Kubernetes, que permiten gestionar despliegues complejos de aplicaciones contenerizadas a escala, automatizando tareas como el equilibrio de carga, la escalabilidad y la recuperación ante fallos.
        `,
        questions: [
          {
            question: "¿Cuál es la principal diferencia entre máquinas virtuales y contenedores?",
            options: [
              "Las máquinas virtuales son más rápidas que los contenedores",
              "Los contenedores comparten el sistema operativo del host, mientras que las máquinas virtuales tienen su propio sistema operativo",
              "Los contenedores solo funcionan en la nube pública",
              "Las máquinas virtuales no pueden ejecutar aplicaciones empresariales",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Qué tecnología es Docker?",
            options: [
              "Un hipervisor tipo 1",
              "Un sistema operativo para servidores",
              "Una plataforma de contenedores",
              "Un lenguaje de programación para la nube",
            ],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Cuál es la función principal de Kubernetes?",
            options: [
              "Crear imágenes de contenedores",
              "Orquestar y gestionar clústeres de contenedores",
              "Virtualizar hardware físico",
              "Proporcionar almacenamiento en la nube",
            ],
            correctAnswerIndex: 1,
          },
        ],
      },
    ],
  },
  {
    id: "mobile",
    title: "Aplicaciones Móviles",
    description: "Desarrollo de aplicaciones para dispositivos móviles en plataformas iOS y Android.",
    icon: "fa-mobile-alt",
    color: "#9b59b6",
    topics: [
      {
        id: "mobile-semana1",
        title: "Semana 1: Introducción al Desarrollo Móvil",
        summary: `
          El desarrollo de aplicaciones móviles se ha convertido en una de las áreas más dinámicas y relevantes de la industria del software. Con miles de millones de dispositivos móviles en uso en todo el mundo, las aplicaciones móviles representan una forma poderosa de llegar a los usuarios.

          En esta primera semana, exploraremos el panorama actual del desarrollo móvil, incluyendo las principales plataformas (iOS y Android), sus características, cuotas de mercado y ecosistemas. Analizaremos las diferencias entre aplicaciones nativas, híbridas y web progresivas (PWA), con sus respectivas ventajas y desventajas.

          También estudiaremos el ciclo de vida del desarrollo de aplicaciones móviles, desde la concepción y diseño hasta la publicación en las tiendas de aplicaciones y el mantenimiento posterior. Discutiremos consideraciones importantes como la experiencia de usuario en dispositivos móviles, las limitaciones de recursos y la diversidad de dispositivos.
        `,
        questions: [
          {
            question: "¿Cuál es la principal ventaja de las aplicaciones nativas frente a las híbridas?",
            options: [
              "Son más baratas de desarrollar",
              "Requieren menos tiempo de desarrollo",
              "Ofrecen mejor rendimiento y acceso completo a las capacidades del dispositivo",
              "Funcionan en todas las plataformas con un solo código",
            ],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Qué lenguaje de programación se utiliza principalmente para el desarrollo nativo en Android?",
            options: ["Swift", "Objective-C", "Java/Kotlin", "C#"],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Qué son las PWA (Progressive Web Apps)?",
            options: [
              "Aplicaciones nativas para Windows Phone",
              "Aplicaciones web que ofrecen una experiencia similar a las nativas",
              "Un tipo de framework para desarrollo híbrido",
              "Aplicaciones exclusivas para tabletas",
            ],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        id: "mobile-semana2",
        title: "Semana 2: Diseño de Interfaces para Móviles",
        summary: `
          El diseño de interfaces de usuario (UI) y experiencia de usuario (UX) es particularmente crítico en aplicaciones móviles debido a las limitaciones de espacio en pantalla, la interacción táctil y los diversos contextos de uso. Un buen diseño puede marcar la diferencia entre el éxito y el fracaso de una aplicación.

          Durante esta semana, estudiaremos los principios fundamentales del diseño móvil, incluyendo las guías de diseño de Material Design (Android) y Human Interface Guidelines (iOS). Aprenderemos sobre layouts responsivos, sistemas de navegación, tipografía, color y otros elementos visuales adaptados al contexto móvil.

          También exploraremos técnicas para mejorar la usabilidad móvil, como el diseño para "el pulgar", la accesibilidad, los gestos táctiles y la retroalimentación visual y háptica. Analizaremos herramientas populares para prototipado y diseño de interfaces móviles como Figma, Sketch y Adobe XD.
        `,
        questions: [
          {
            question: "¿Qué es el 'diseño para el pulgar' en interfaces móviles?",
            options: [
              "Un diseño que solo funciona con huellas dactilares",
              "Colocar elementos interactivos en áreas fácilmente alcanzables con el pulgar",
              "Un sistema de navegación basado en gestos",
              "Un tipo de animación para botones",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Cuál de los siguientes NO es un principio de Material Design?",
            options: [
              "Diseño basado en papel y tinta",
              "Animaciones significativas",
              "Minimalismo extremo sin colores",
              "Uso de cuadrículas y espaciado consistente",
            ],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Por qué es importante el diseño responsivo en aplicaciones móviles?",
            options: [
              "Para que la aplicación responda rápidamente a los toques",
              "Para que la interfaz se adapte a diferentes tamaños de pantalla y orientaciones",
              "Para reducir el consumo de batería",
              "Para cumplir con requisitos legales",
            ],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        id: "mobile-semana3",
        title: "Semana 3: Frameworks de Desarrollo Multiplataforma",
        summary: `
          Los frameworks de desarrollo multiplataforma permiten crear aplicaciones que funcionan en múltiples sistemas operativos móviles con una única base de código, reduciendo significativamente el tiempo y costo de desarrollo. Estas herramientas han evolucionado considerablemente en los últimos años, ofreciendo rendimiento y capacidades cercanas a las aplicaciones nativas.

          En esta semana, exploraremos los principales frameworks multiplataforma como React Native, Flutter, Xamarin y Ionic. Para cada uno, analizaremos su arquitectura, lenguaje de programación, componentes principales, flujo de trabajo de desarrollo y casos de uso ideales.

          También discutiremos las consideraciones para elegir entre desarrollo nativo y multiplataforma según los requisitos del proyecto, y estudiaremos estrategias para maximizar el código compartido mientras se mantiene la experiencia específica de cada plataforma cuando sea necesario.
        `,
        questions: [
          {
            question: "¿Qué lenguaje de programación se utiliza principalmente en Flutter?",
            options: ["JavaScript", "C#", "Dart", "TypeScript"],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Cuál es una ventaja clave de React Native?",
            options: [
              "Compila a código nativo para mejor rendimiento",
              "Utiliza WebView para renderizar la interfaz",
              "Solo funciona en dispositivos Android",
              "Requiere conocimientos de Swift y Kotlin",
            ],
            correctAnswerIndex: 0,
          },
          {
            question: "¿Qué framework multiplataforma está desarrollado por Microsoft?",
            options: ["React Native", "Flutter", "Xamarin", "Ionic"],
            correctAnswerIndex: 2,
          },
        ],
      },
    ],
  },
  {
    id: "bi",
    title: "Inteligencia de Negocios",
    description: "Análisis de datos empresariales para la toma de decisiones estratégicas.",
    icon: "fa-chart-line",
    color: "#2ecc71",
    topics: [
      {
        id: "bi-semana1",
        title: "Semana 1: Fundamentos de Inteligencia de Negocios",
        summary: `
          La Inteligencia de Negocios (BI) comprende las estrategias y tecnologías utilizadas por las empresas para analizar datos e información de negocio. Su objetivo principal es apoyar la toma de decisiones basada en datos, proporcionando conocimientos accionables que mejoren el rendimiento organizacional.

          En esta primera semana, exploraremos los conceptos fundamentales de BI, su evolución histórica y su importancia estratégica en el entorno empresarial actual. Estudiaremos el ciclo de vida de la inteligencia de negocios, desde la recopilación de datos hasta la generación de insights y la implementación de decisiones.

          También analizaremos los componentes principales de una solución de BI, incluyendo fuentes de datos, procesos ETL (Extracción, Transformación y Carga), almacenes de datos (data warehouses), herramientas de análisis y visualización, y sistemas de reportes. Discutiremos cómo estos componentes trabajan juntos para transformar datos brutos en información valiosa para el negocio.
        `,
        questions: [
          {
            question: "¿Cuál es el principal objetivo de la Inteligencia de Negocios?",
            options: [
              "Automatizar todos los procesos empresariales",
              "Reemplazar a los gerentes en la toma de decisiones",
              "Proporcionar información y análisis para mejorar la toma de decisiones",
              "Reducir la cantidad de datos que maneja una empresa",
            ],
            correctAnswerIndex: 2,
          },
          {
            question: "¿Qué significa ETL en el contexto de Inteligencia de Negocios?",
            options: [
              "Evaluar, Testear, Lanzar",
              "Extraer, Transformar, Cargar (Load)",
              "Entender, Traducir, Listar",
              "Ejecutar, Temporizar, Limitar",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Qué es un data warehouse?",
            options: [
              "Un tipo de base de datos operacional para transacciones diarias",
              "Un repositorio centralizado optimizado para análisis y consultas de datos",
              "Una herramienta para crear visualizaciones de datos",
              "Un sistema para gestionar documentos empresariales",
            ],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        id: "bi-semana2",
        title: "Semana 2: Modelado de Datos para BI",
        summary: `
          El modelado de datos es un aspecto crítico de la inteligencia de negocios que determina cómo se estructuran, relacionan y almacenan los datos para su análisis eficiente. Un modelo bien diseñado facilita consultas complejas, mejora el rendimiento y permite una interpretación más intuitiva de la información.

          Durante esta semana, estudiaremos los diferentes enfoques de modelado para BI, incluyendo el modelo dimensional (esquemas en estrella y copo de nieve), el modelado relacional normalizado y los modelos híbridos. Aprenderemos a identificar hechos, dimensiones, medidas y jerarquías, y a diseñar modelos que respondan a los requisitos analíticos del negocio.

          También exploraremos conceptos avanzados como dimensiones lentamente cambiantes (SCD), tablas de hechos agregadas, y técnicas de modelado para casos específicos como series temporales, jerarquías recursivas y relaciones muchos a muchos. Practicaremos el diseño de modelos utilizando herramientas populares del mercado.
        `,
        questions: [
          {
            question: "¿Qué es un esquema en estrella en el modelado dimensional?",
            options: [
              "Un diagrama con forma de estrella que muestra el rendimiento de la empresa",
              "Un modelo donde una tabla de hechos central se conecta directamente con múltiples tablas de dimensiones",
              "Un tipo de visualización para datos financieros",
              "Un método para evaluar la calidad de los datos",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Cuál es la diferencia principal entre una tabla de hechos y una tabla de dimensiones?",
            options: [
              "Las tablas de hechos contienen medidas numéricas y claves foráneas, mientras que las tablas de dimensiones contienen atributos descriptivos",
              "Las tablas de hechos son más grandes que las tablas de dimensiones",
              "Las tablas de hechos se actualizan diariamente, las de dimensiones mensualmente",
              "Las tablas de hechos son para datos históricos, las de dimensiones para datos actuales",
            ],
            correctAnswerIndex: 0,
          },
          {
            question: "¿Qué son las dimensiones lentamente cambiantes (SCD)?",
            options: [
              "Dimensiones que nunca cambian sus valores",
              "Técnicas para manejar cambios en los atributos de dimensiones a lo largo del tiempo",
              "Dimensiones que solo se actualizan una vez al año",
              "Un tipo de dimensión que se carga muy lentamente debido a su tamaño",
            ],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        id: "bi-semana3",
        title: "Semana 3: Visualización de Datos y Dashboards",
        summary: `
          La visualización de datos es el arte y la ciencia de representar información de manera gráfica para facilitar su comprensión, identificar patrones y comunicar insights de forma efectiva. En el contexto de BI, las visualizaciones y dashboards son la interfaz principal a través de la cual los usuarios interactúan con los datos y obtienen valor de ellos.

          En esta semana, exploraremos los principios fundamentales de la visualización de datos efectiva, incluyendo la elección del tipo de gráfico adecuado según el mensaje a comunicar, el uso del color, la disposición espacial, la simplificación y la atención a la percepción visual humana.

          También estudiaremos el diseño de dashboards empresariales, desde la definición de KPIs (Indicadores Clave de Rendimiento) hasta la creación de paneles interactivos que permitan la exploración de datos a diferentes niveles de detalle. Analizaremos herramientas populares de visualización como Tableau, Power BI, QlikView y Google Data Studio, y practicaremos la creación de visualizaciones efectivas con datos reales.
        `,
        questions: [
          {
            question:
              "¿Qué tipo de gráfico es más adecuado para mostrar la distribución de valores en un conjunto de datos?",
            options: [
              "Gráfico de líneas",
              "Gráfico de barras",
              "Gráfico circular (pie)",
              "Histograma o gráfico de densidad",
            ],
            correctAnswerIndex: 3,
          },
          {
            question: "¿Qué es un KPI en el contexto de dashboards empresariales?",
            options: [
              "Knowledge Processing Interface",
              "Key Performance Indicator (Indicador Clave de Rendimiento)",
              "Keyword Placement Index",
              "Knowledge Proficiency Inventory",
            ],
            correctAnswerIndex: 1,
          },
          {
            question: "¿Cuál de los siguientes es un principio importante en el diseño de dashboards efectivos?",
            options: [
              "Incluir la mayor cantidad posible de datos en una sola pantalla",
              "Usar colores brillantes para todos los elementos",
              "Proporcionar contexto y permitir la comparación de métricas",
              "Evitar cualquier tipo de interactividad para no confundir al usuario",
            ],
            correctAnswerIndex: 2,
          },
        ],
      },
    ],
  },
  {
    id: "metodologia",
    title: "Metodología de la Investigación Científica",
    description: "Fundamentos y técnicas para la investigación académica y científica.",
    icon: "fa-microscope",
    color: "#e74c3c",
    topics: syllabusData.topics, // Mantener los temas originales para este curso
  },
]

// ===== BASE DE DATOS DE USUARIOS =====
const usersDB = [
  { email: "estudiante@autonoma.edu.pe", password: "estudiante123", name: "Estudiante Demo", role: "student" },
]

// ===== ELEMENTOS DEL DOM =====
const views = document.querySelectorAll(".view")
const loginView = document.getElementById("login-view")
const registerView = document.getElementById("register-view")
const courseSelectionView = document.getElementById("course-selection-view")
const topicSelectionView = document.getElementById("topic-selection-view")
const chatView = document.getElementById("chat-view")
const quizView = document.getElementById("quiz-view")
const resultsView = document.getElementById("results-view")

const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("password-input")
const loginButton = document.getElementById("login-button")
const registerLinkButton = document.getElementById("register-link")
const loginError = document.getElementById("login-error")
const logoutButton = document.getElementById("logout-button")
const userEmailDisplay = document.getElementById("user-email-display")
const userNameDisplay = document.getElementById("user-name-display")
const roleRadios = document.querySelectorAll('input[name="role"]')

// Elementos del formulario de registro
const registerForm = document.getElementById("register-form")
const registerNameInput = document.getElementById("register-name-input")
const registerEmailInput = document.getElementById("register-email-input")
const registerPasswordInput = document.getElementById("register-password-input")
const registerConfirmPasswordInput = document.getElementById("register-confirm-password-input")
const registerButton = document.getElementById("register-button")
const registerError = document.getElementById("register-error")
const loginLinkButton = document.getElementById("login-link")
const registerRoleRadios = document.querySelectorAll('input[name="register-role"]')

// Elementos de selección de cursos
const courseList = document.getElementById("course-list")

// Elementos de selección de temas
const currentCourseTitle = document.getElementById("current-course-title")
const topicUserName = document.getElementById("topic-user-name")
const topicUserEmail = document.getElementById("topic-user-email")
const backToCoursesButton = document.getElementById("back-to-courses-button")
const topicLogoutButton = document.getElementById("topic-logout-button")
const courseName = document.getElementById("course-name")
const courseDescription = document.getElementById("course-description")
const courseIcon = document.getElementById("course-icon")
const topicList = document.getElementById("topic-list")
const syllabusEditor = document.getElementById("syllabus-editor")
const editCourseDescription = document.getElementById("edit-course-description")
const topicsEditor = document.getElementById("topics-editor")
const addTopicButton = document.getElementById("add-topic-button")
const saveSyllabusButton = document.getElementById("save-syllabus-button")

const chatTopicTitle = document.getElementById("chat-topic-title")
const chatTopicContext = document.getElementById("chat-topic-context") // Span para el tema en el mensaje de introducción
const topicSummary = document.getElementById("topic-summary") // Aún se utiliza para la visualización inicial
const startQuizButton = document.getElementById("start-quiz-button")
const chatBackButton = document.getElementById("chat-back-button")

// Elementos específicos del chat
const chatMessages = document.getElementById("chat-messages")
const chatInput = document.getElementById("chat-input")
const sendChatButton = document.getElementById("send-chat-button")
const chatLoading = document.getElementById("chat-loading")
const chatError = document.getElementById("chat-error")

const quizTopicTitle = document.getElementById("quiz-topic-title")
const timerDisplay = document.getElementById("timer")
const quizForm = document.getElementById("quiz-form")
const submitQuizButton = document.getElementById("submit-quiz-button")
const quizMessage = document.getElementById("quiz-message")
const unansweredWarning = document.getElementById("unanswered-warning")

const resultsTopicTitle = document.getElementById("results-topic-title")
const scoreDisplay = document.getElementById("score")
const resultsDetails = document.getElementById("results-details")
const recommendations = document.getElementById("recommendations")
const tryAgainButton = document.getElementById("try-again-button")
const resultsBackButton = document.getElementById("results-back-button")
const backToCoursesFromResults = document.getElementById("back-to-courses-from-results")

// Botones de cambio de tema
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const registerThemeToggleBtn = document.getElementById("register-theme-toggle-btn")
const themeToggleMain = document.getElementById("theme-toggle-main")
const themeToggleTopics = document.getElementById("theme-toggle-topics")
const themeToggleChat = document.getElementById("theme-toggle-chat")
const themeToggleResults = document.getElementById("theme-toggle-results")

// ===== FUNCIONES =====

// Función para cambiar el tema
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", currentTheme)
  localStorage.setItem("theme", currentTheme)

  // Actualizar iconos de todos los botones de tema
  const themeButtons = document.querySelectorAll(".theme-btn, .theme-toggle-btn")
  themeButtons.forEach((btn) => {
    const icon = btn.querySelector("i")
    if (icon) {
      if (currentTheme === "dark") {
        icon.className = "fas fa-sun"
      } else {
        icon.className = "fas fa-moon"
      }
    }
  })
}

// Inicializar tema
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme)

  // Actualizar iconos de todos los botones de tema
  const themeButtons = document.querySelectorAll(".theme-btn, .theme-toggle-btn")
  themeButtons.forEach((btn) => {
    const icon = btn.querySelector("i")
    if (icon) {
      if (currentTheme === "dark") {
        icon.className = "fas fa-sun"
      } else {
        icon.className = "fas fa-moon"
      }
    }
  })
}

function showView(viewId) {
  views.forEach((view) => {
    view.classList.remove("active")
  })
  const activeView = document.getElementById(viewId)
  if (activeView) {
    activeView.classList.add("active")
    currentView = viewId
  } else {
    console.error("View not found:", viewId)
    // Volver a la vista de inicio de sesión si la vista solicitada no existe
    document.getElementById("login-view").classList.add("active")
    currentView = "login"
  }
  // Desplázate hacia arriba al cambiar de vistas
  window.scrollTo(0, 0)
}

function validateEmail(email) {
  // Validación para el dominio @autonoma.edu.pe
  const re = /^[a-zA-Z0-9._%+-]+@autonoma\.edu\.pe$/
  return re.test(String(email).toLowerCase())
}

function handleLogin() {
  const email = emailInput.value.trim()
  const password = passwordInput.value // Obtener la contraseña
  // Siempre usar el rol de estudiante
  const selectedRole = "student"
  loginError.textContent = "" // Limpiar errores previos

  if (!validateEmail(email)) {
    loginError.textContent = "Por favor, usa un correo válido (@autonoma.edu.pe)"
    return
  }

  if (password === "") {
    loginError.textContent = "Por favor, ingresa tu contraseña."
    return
  }

  // Verifica si el usuario existe en nuestra base de datos simulada
  const user = usersDB.find((u) => u.email === email && u.password === password)

  if (!user) {
    loginError.textContent = "Credenciales incorrectas. Intenta nuevamente."
    return
  }

  userEmail = email
  userName = user.name
  userRole = "student" // Siempre establecer como estudiante

  // Almacenar la sesión del usuario
  localStorage.setItem("userEmail", userEmail)
  localStorage.setItem("userName", userName)
  localStorage.setItem("userRole", userRole)

  userEmailDisplay.textContent = userEmail
  userNameDisplay.textContent = userName

  loadCourses()
  showView("course-selection-view")
  passwordInput.value = "" // Limpiar el campo de contraseña después de iniciar sesión
}

// Actualiza la función handleRegister para prevenir el envío del formulario y agregar un listener de eventos
function handleRegister(event) {
  if (event) event.preventDefault()

  const name = registerNameInput.value.trim()
  const email = registerEmailInput.value.trim()
  const password = registerPasswordInput.value
  const confirmPassword = registerConfirmPasswordInput.value
  // Siempre usar el rol de estudiante
  const selectedRole = "student"
  registerError.textContent = "" // Limpiar errores previos

  // Validar entradas inputs
  if (!name) {
    registerError.textContent = "Por favor, ingresa tu nombre completo."
    return
  }

  if (!validateEmail(email)) {
    registerError.textContent = "Por favor, usa un correo válido (@autonoma.edu.pe)"
    return
  }

  if (password.length < 6) {
    registerError.textContent = "La contraseña debe tener al menos 6 caracteres."
    return
  }

  if (password !== confirmPassword) {
    registerError.textContent = "Las contraseñas no coinciden."
    return
  }

  // Verifica si el usuario ya existe
  if (usersDB.some((u) => u.email === email)) {
    registerError.textContent = "Este correo ya está registrado."
    return
  }

  // Agregar usuario
  usersDB.push({ email, password, name, role: "student" })

  // Mostrar mensaje de éxito y redirigir al inicio de sesión
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.")
  showView("login-view")

  // Limpiar formulario de registro
  registerNameInput.value = ""
  registerEmailInput.value = ""
  registerPasswordInput.value = ""
  registerConfirmPasswordInput.value = ""
}

function handleLogout() {
  userEmail = null
  userName = null
  userRole = "student"
  selectedCourse = null
  selectedTopic = null

  localStorage.removeItem("userEmail")
  localStorage.removeItem("userName")
  localStorage.removeItem("userRole")

  emailInput.value = "" // Limpiar campos de entrada
  passwordInput.value = ""
  loginError.textContent = "" //Limpiar errores

  // Restablecer el estado si es necesario
  userAnswers = {}
  stopTimer()
  chatHistory = [] // Limpiar el historial de chat al cerrar sesión
  showView("login-view")
}

function loadCourses() {
  courseList.innerHTML = "" // Limpiar cursos anteriores

  coursesData.forEach((course) => {
    const courseCard = document.createElement("div")
    courseCard.className = "course-card"
    courseCard.dataset.courseId = course.id

    courseCard.innerHTML = `
      <div class="course-card-header" style="background-color: ${course.color}">
        <div class="course-card-icon">
          <i class="fas ${course.icon}"></i>
        </div>
      </div>
      <div class="course-card-body">
        <div class="course-card-title">${course.title}</div>
        <div class="course-card-description">${course.description}</div>
      </div>
      <div class="course-card-footer">
        <button class="secondary-button">Acceder al Curso</button>
      </div>
    `

    courseCard.addEventListener("click", () => selectCourse(course.id))
    courseList.appendChild(courseCard)
  })
}

function selectCourse(courseId) {
  selectedCourse = coursesData.find((c) => c.id === courseId)
  if (selectedCourse) {
    currentCourseTitle.textContent = selectedCourse.title
    topicUserName.textContent = userName
    topicUserEmail.textContent = userEmail

    courseName.textContent = selectedCourse.title
    courseDescription.textContent = selectedCourse.description
    courseIcon.className = `fas ${selectedCourse.icon}`

    // Ocultar editor de sílabo ya que solo es para estudiantes
    syllabusEditor.style.display = "none"

    loadTopics()
    showView("topic-selection-view")
  } else {
    console.error("Course not found:", courseId)
    showView("course-selection-view")
  }
}

function loadTopics() {
  topicList.innerHTML = "" // Limpiar temas anteriores

  if (selectedCourse && selectedCourse.topics) {
    selectedCourse.topics.forEach((topic) => {
      const button = document.createElement("button")
      button.innerHTML = `<i class="fas fa-file-alt"></i> ${topic.title}`
      button.dataset.topicId = topic.id
      button.addEventListener("click", () => selectTopic(topic.id))
      topicList.appendChild(button)
    })
  }
}

function loadTopicsForEditing() {
  topicsEditor.innerHTML = ""

  if (selectedCourse && selectedCourse.topics) {
    selectedCourse.topics.forEach((topic, index) => {
      const topicEditItem = document.createElement("div")
      topicEditItem.className = "topic-edit-item"
      topicEditItem.dataset.topicId = topic.id

      // Limpiar el resumen de etiquetas HTML
      let cleanSummary = topic.summary
      // Eliminar etiquetas HTML
      cleanSummary = cleanSummary.replace(/<[^>]*>/g, "")
      // Eliminar DOCTYPE y otras declaraciones
      cleanSummary = cleanSummary.replace(/<!DOCTYPE[^>]*>/g, "")
      cleanSummary = cleanSummary.replace(/<!--[\s\S]*?-->/g, "")
      // Eliminar "En resumen" al final si existe
      cleanSummary = cleanSummary.replace(/En resumen,?\s*\.?$/i, "")

      topicEditItem.innerHTML = `
        <div class="topic-edit-header">
          <div class="topic-edit-title">
            <i class="fas fa-file-alt"></i> Semana ${index + 1}
          </div>
          <div class="topic-edit-actions">
            <button class="icon-button edit" title="Editar tema"><i class="fas fa-edit"></i></button>
            <button class="icon-button delete" title="Eliminar tema"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <div class="topic-edit-content" style="display: none;">
          <div class="input-group">
            <label>Título de la semana:</label>
            <input type="text" class="topic-title-input" value="${topic.title}">
          </div>
          <div class="input-group">
            <label>Resumen:</label>
            <textarea class="topic-summary-input" rows="4" placeholder="Ingrese el resumen del tema aquí...">${cleanSummary}</textarea>
          </div>
          <button class="ai-generate-btn generate-summary-btn" data-topic-index="${index}">
            <i class="fas fa-magic"></i> Generar resumen con IA
          </button>
          <div class="ai-loading summary-loading-${index}" style="display: none;">
            <i class="fas fa-spinner fa-spin"></i> Generando resumen...
          </div>
          
          <!-- Sección de preguntas -->
          <div class="questions-section">
            <h4><i class="fas fa-question-circle"></i> Preguntas de evaluación</h4>
            <div class="questions-container" id="questions-container-${topic.id}">
              ${renderQuestions(topic.questions || [])}
            </div>
            <button class="add-question-btn" data-topic-id="${topic.id}">
              <i class="fas fa-plus"></i> Añadir pregunta
            </button>
            <button class="generate-questions-btn" data-topic-id="${topic.id}">
              <i class="fas fa-magic"></i> Generar preguntas con IA
            </button>
            <div class="ai-loading questions-loading-${topic.id}" style="display: none;">
              <i class="fas fa-spinner fa-spin"></i> Generando preguntas...
            </div>
          </div>
        </div>
      `

      // Agregar event listeners para los botones de edición y eliminación
      const editBtn = topicEditItem.querySelector(".edit")
      const deleteBtn = topicEditItem.querySelector(".delete")
      const content = topicEditItem.querySelector(".topic-edit-content")
      const generateBtn = topicEditItem.querySelector(".generate-summary-btn")
      const addQuestionBtn = topicEditItem.querySelector(".add-question-btn")
      const generateQuestionsBtn = topicEditItem.querySelector(".generate-questions-btn")

      editBtn.addEventListener("click", () => {
        content.style.display = content.style.display === "none" ? "block" : "none"
      })

      deleteBtn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas eliminar esta semana?")) {
          topicEditItem.remove()
        }
      })

      generateBtn.addEventListener("click", (e) => {
        const topicIndex = e.currentTarget.dataset.topicIndex
        const titleInput = topicEditItem.querySelector(".topic-title-input")
        generateSummaryWithAI(titleInput.value, topicIndex)
      })

      addQuestionBtn.addEventListener("click", (e) => {
        const topicId = e.currentTarget.dataset.topicId
        addNewQuestion(topicId)
      })

      generateQuestionsBtn.addEventListener("click", (e) => {
        const topicId = e.currentTarget.dataset.topicId
        const titleInput = topicEditItem.querySelector(".topic-title-input")
        const summaryInput = topicEditItem.querySelector(".topic-summary-input")
        generateQuestionsWithAI(topicId, titleInput.value, summaryInput.value)
      })

      topicsEditor.appendChild(topicEditItem)
    })
  }
}

function renderQuestions(questions) {
  return questions
    .map(
      (question, qIndex) => `
    <div class="question-item" data-question-index="${qIndex}">
      <div class="question-header">
        <span class="question-text">${question.question}</span>
        <div class="question-actions">
          <button class="icon-button edit edit-question-btn" title="Editar pregunta">
            <i class="fas fa-edit"></i>
          </button>
          <button class="icon-button delete delete-question-btn" title="Eliminar pregunta">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="options-list">
        ${question.options
          .map(
            (option, oIndex) => `
          <div class="option-item ${oIndex === question.correctAnswerIndex ? "correct" : ""}">
            <input type="radio" name="correct-${qIndex}" value="${oIndex}" ${
              oIndex === question.correctAnswerIndex ? "checked" : ""
            }>
            <span class="option-text">${option}</span>
            <button class="icon-button delete delete-option-btn" title="Eliminar opción">
              <i class="fas fa-times"></i>
            </button>
          </div>
        `,
          )
          .join("")}
        <button class="add-option-btn" data-question-index="${qIndex}">
          <i class="fas fa-plus"></i> Añadir opción
        </button>
      </div>
    </div>
  `,
    )
    .join("")
}

function addNewQuestion(topicId) {
  const container = document.getElementById(`questions-container-${topicId}`)
  const questionCount = container.querySelectorAll(".question-item").length

  const newQuestionHTML = `
    <div class="question-item" data-question-index="${questionCount}">
      <div class="question-header">
        <input type="text" class="question-text-input" placeholder="Escriba la pregunta aquí..." style="flex-grow: 1; margin-right: 10px;">
        <div class="question-actions">
          <button class="icon-button edit edit-question-btn" title="Editar pregunta">
            <i class="fas fa-edit"></i>
          </button>
          <button class="icon-button delete delete-question-btn" title="Eliminar pregunta">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="options-list">
        <div class="option-item">
          <input type="radio" name="correct-${questionCount}" value="0" checked>
          <input type="text" class="option-text-input" placeholder="Opción 1" style="flex-grow: 1; margin-left: 10px;">
          <button class="icon-button delete delete-option-btn" title="Eliminar opción">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="option-item">
          <input type="radio" name="correct-${questionCount}" value="1">
          <input type="text" class="option-text-input" placeholder="Opción 2" style="flex-grow: 1; margin-left: 10px;">
          <button class="icon-button delete delete-option-btn" title="Eliminar opción">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <button class="add-option-btn" data-question-index="${questionCount}">
          <i class="fas fa-plus"></i> Añadir opción
        </button>
      </div>
    </div>
  `

  container.insertAdjacentHTML("beforeend", newQuestionHTML)
  attachQuestionEventListeners(container.lastElementChild)
}

function attachQuestionEventListeners(questionElement) {
  const editBtn = questionElement.querySelector(".edit-question-btn")
  const deleteBtn = questionElement.querySelector(".delete-question-btn")
  const addOptionBtn = questionElement.querySelector(".add-option-btn")

  editBtn.addEventListener("click", () => {
    // Lógica para editar pregunta
    console.log("Editar pregunta")
  })

  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta pregunta?")) {
      questionElement.remove()
    }
  })

  addOptionBtn.addEventListener("click", (e) => {
    const questionIndex = e.currentTarget.dataset.questionIndex
    addNewOption(questionElement, questionIndex)
  })

  // Event listeners para eliminar opciones
  const deleteOptionBtns = questionElement.querySelectorAll(".delete-option-btn")
  deleteOptionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const optionItem = e.currentTarget.closest(".option-item")
      if (questionElement.querySelectorAll(".option-item").length > 2) {
        optionItem.remove()
      } else {
        alert("Debe haber al menos 2 opciones por pregunta.")
      }
    })
  })
}

function addNewOption(questionElement, questionIndex) {
  const optionsList = questionElement.querySelector(".options-list")
  const addOptionBtn = optionsList.querySelector(".add-option-btn")
  const optionCount = optionsList.querySelectorAll(".option-item").length

  const newOptionHTML = `
    <div class="option-item">
      <input type="radio" name="correct-${questionIndex}" value="${optionCount}">
      <input type="text" class="option-text-input" placeholder="Nueva opción" style="flex-grow: 1; margin-left: 10px;">
      <button class="icon-button delete delete-option-btn" title="Eliminar opción">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `

  addOptionBtn.insertAdjacentHTML("beforebegin", newOptionHTML)

  // Agregar event listener al nuevo botón de eliminar
  const newDeleteBtn = optionsList.querySelector(".option-item:last-of-type .delete-option-btn")
  newDeleteBtn.addEventListener("click", (e) => {
    const optionItem = e.currentTarget.closest(".option-item")
    if (optionsList.querySelectorAll(".option-item").length > 2) {
      optionItem.remove()
    } else {
      alert("Debe haber al menos 2 opciones por pregunta.")
    }
  })
}

async function generateSummaryWithAI(topicTitle, topicIndex) {
  if (isGeneratingSummary) return

  isGeneratingSummary = true
  const loadingElement = document.querySelector(`.summary-loading-${topicIndex}`)
  const generateBtn = document.querySelector(`[data-topic-index="${topicIndex}"]`)

  loadingElement.style.display = "flex"
  generateBtn.disabled = true

  try {
    const prompt = `Genera un resumen académico detallado para el tema: "${topicTitle}". 
    El resumen debe ser educativo, estructurado y apropiado para estudiantes universitarios. 
    Incluye conceptos clave, definiciones importantes y ejemplos cuando sea relevante. 
    El resumen debe tener entre 200-400 palabras y estar bien organizado con párrafos claros.`

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          {
            role: "system",
            content: "Eres un profesor universitario experto en crear contenido educativo de alta calidad.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json()
    const generatedSummary = data.choices[0].message.content.trim()

    // Actualizar el textarea con el resumen generado
    const summaryTextarea = document
      .querySelector(`[data-topic-index="${topicIndex}"]`)
      .closest(".topic-edit-content")
      .querySelector(".topic-summary-input")
    summaryTextarea.value = generatedSummary
  } catch (error) {
    console.error("Error generando resumen:", error)
    alert("Error al generar el resumen. Por favor, intenta nuevamente.")
  } finally {
    loadingElement.style.display = "none"
    generateBtn.disabled = false
    isGeneratingSummary = false
  }
}

async function generateQuestionsWithAI(topicId, topicTitle, topicSummary) {
  if (isGeneratingQuestions) return

  isGeneratingQuestions = true
  const loadingElement = document.querySelector(`.questions-loading-${topicId}`)
  const generateBtn = document.querySelector(`[data-topic-id="${topicId}"]`)

  loadingElement.style.display = "flex"
  generateBtn.disabled = true

  try {
    const prompt = `Basándote en el siguiente tema y resumen, genera 5 preguntas de opción múltiple para evaluar la comprensión de los estudiantes:

    Tema: ${topicTitle}
    Resumen: ${topicSummary}

    Para cada pregunta, proporciona:
    1. La pregunta
    2. 4 opciones de respuesta (A, B, C, D)
    3. Indica cuál es la respuesta correcta

    Las preguntas deben ser claras, relevantes al contenido y de dificultad apropiada para estudiantes universitarios.
    
    Formato de respuesta:
    Pregunta 1: [pregunta]
    A) [opción]
    B) [opción]
    C) [opción]
    D) [opción]
    Respuesta correcta: [letra]

    [Repetir para las 5 preguntas]`

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          {
            role: "system",
            content: "Eres un profesor universitario experto en crear evaluaciones educativas de alta calidad.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 1500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json()
    const generatedContent = data.choices[0].message.content.trim()

    // Parsear las preguntas generadas y agregarlas al contenedor
    const questions = parseGeneratedQuestions(generatedContent)
    const container = document.getElementById(`questions-container-${topicId}`)

    questions.forEach((question) => {
      const questionCount = container.querySelectorAll(".question-item").length
      const newQuestionHTML = `
        <div class="question-item" data-question-index="${questionCount}">
          <div class="question-header">
            <span class="question-text">${question.question}</span>
            <div class="question-actions">
              <button class="icon-button edit edit-question-btn" title="Editar pregunta">
                <i class="fas fa-edit"></i>
              </button>
              <button class="icon-button delete delete-question-btn" title="Eliminar pregunta">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div class="options-list">
            ${question.options
              .map(
                (option, oIndex) => `
              <div class="option-item ${oIndex === question.correctAnswerIndex ? "correct" : ""}">
                <input type="radio" name="correct-${questionCount}" value="${oIndex}" ${
                  oIndex === question.correctAnswerIndex ? "checked" : ""
                }>
                <span class="option-text">${option}</span>
                <button class="icon-button delete delete-option-btn" title="Eliminar opción">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            `,
              )
              .join("")}
            <button class="add-option-btn" data-question-index="${questionCount}">
              <i class="fas fa-plus"></i> Añadir opción
            </button>
          </div>
        </div>
      `

      container.insertAdjacentHTML("beforeend", newQuestionHTML)
      attachQuestionEventListeners(container.lastElementChild)
    })
  } catch (error) {
    console.error("Error generando preguntas:", error)
    alert("Error al generar las preguntas. Por favor, intenta nuevamente.")
  } finally {
    loadingElement.style.display = "none"
    generateBtn.disabled = false
    isGeneratingQuestions = false
  }
}

function parseGeneratedQuestions(content) {
  const questions = []
  const questionBlocks = content.split(/Pregunta \d+:/).slice(1)

  questionBlocks.forEach((block) => {
    const lines = block.trim().split("\n")
    const questionText = lines[0].trim()
    const options = []
    let correctAnswerIndex = 0

    lines.forEach((line) => {
      const trimmedLine = line.trim()
      if (trimmedLine.match(/^[A-D]\)/)) {
        options.push(trimmedLine.substring(2).trim())
      } else if (trimmedLine.startsWith("Respuesta correcta:")) {
        const correctLetter = trimmedLine.split(":")[1].trim().toUpperCase()
        correctAnswerIndex = correctLetter.charCodeAt(0) - 65 // A=0, B=1, C=2, D=3
      }
    })

    if (questionText && options.length >= 4) {
      questions.push({
        question: questionText,
        options: options.slice(0, 4), // Tomar solo las primeras 4 opciones
        correctAnswerIndex: Math.max(0, Math.min(3, correctAnswerIndex)), // Asegurar que esté en rango
      })
    }
  })

  return questions
}

function saveSyllabus() {
  const topicItems = document.querySelectorAll(".topic-edit-item")
  const updatedTopics = []

  topicItems.forEach((item, index) => {
    const topicId = item.dataset.topicId
    const titleInput = item.querySelector(".topic-title-input")
    const summaryInput = item.querySelector(".topic-summary-input")

    // Recopilar preguntas
    const questionItems = item.querySelectorAll(".question-item")
    const questions = []

    questionItems.forEach((questionItem) => {
      const questionText =
        questionItem.querySelector(".question-text")?.textContent ||
        questionItem.querySelector(".question-text-input")?.value
      const optionItems = questionItem.querySelectorAll(".option-item")
      const options = []
      let correctAnswerIndex = 0

      optionItems.forEach((optionItem, optionIndex) => {
        const optionText =
          optionItem.querySelector(".option-text")?.textContent || optionItem.querySelector(".option-text-input")?.value
        if (optionText) {
          options.push(optionText)
          if (optionItem.querySelector('input[type="radio"]').checked) {
            correctAnswerIndex = optionIndex
          }
        }
      })

      if (questionText && options.length >= 2) {
        questions.push({
          question: questionText,
          options: options,
          correctAnswerIndex: correctAnswerIndex,
        })
      }
    })

    updatedTopics.push({
      id: topicId || `topic-${index + 1}`,
      title: titleInput.value,
      summary: summaryInput.value,
      questions: questions,
    })
  })

  // Actualizar los datos del curso
  if (selectedCourse) {
    selectedCourse.topics = updatedTopics
    // Actualizar también en coursesData
    const courseIndex = coursesData.findIndex((c) => c.id === selectedCourse.id)
    if (courseIndex !== -1) {
      coursesData[courseIndex].topics = updatedTopics
    }
  }

  // Recargar los temas en la vista principal
  loadTopics()

  alert("Sílabo guardado exitosamente!")
}

function selectTopic(topicId) {
  selectedTopic = selectedCourse.topics.find((t) => t.id === topicId)
  if (selectedTopic) {
    chatTopicTitle.textContent = selectedTopic.title
    chatTopicContext.textContent = selectedTopic.title // Actualizar el contexto en el mensaje de introducción
    topicSummary.innerHTML = selectedTopic.summary // Usar innerHTML para mostrar HTML formateado

    // Limpiar el historial de chat al seleccionar un nuevo tema
    chatHistory = []
    chatMessages.innerHTML = `
      <div class="message system-message">
        <p>Hola! Soy tu asistente para este curso. Puedes preguntarme sobre el resumen del tema a continuación o cualquier duda que tengas sobre <strong>${selectedTopic.title}</strong>.</p>
      </div>
      <div class="message system-message">
        <strong>Resumen:</strong>
        <div>${selectedTopic.summary}</div>
      </div>
    `

    showView("chat-view")
  } else {
    console.error("Topic not found:", topicId)
    showView("topic-selection-view")
  }
}

async function sendChatMessage() {
  const message = chatInput.value.trim()
  if (!message) return

  // Agregar mensaje del usuario al chat
  const userMessageDiv = document.createElement("div")
  userMessageDiv.className = "message user-message"
  userMessageDiv.textContent = message
  chatMessages.appendChild(userMessageDiv)

  // Limpiar input y mostrar indicador de carga
  chatInput.value = ""
  chatLoading.style.display = "flex"
  chatError.textContent = ""

  // Agregar mensaje al historial
  chatHistory.push({ role: "user", content: message })

  try {
    // Preparar el contexto para la IA
    const contextMessage = `Eres un asistente educativo especializado en el tema: "${selectedTopic.title}". 
    
    Resumen del tema:
    ${selectedTopic.summary}
    
    Responde de manera educativa, clara y útil a las preguntas del estudiante sobre este tema. 
    Si la pregunta no está relacionada con el tema, redirige amablemente la conversación hacia el contenido del curso.`

    // Preparar mensajes para la API
    const messages = [
      { role: "system", content: contextMessage },
      ...chatHistory.slice(-10), // Mantener solo los últimos 10 mensajes para evitar límites de tokens
    ]

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse = data.choices[0].message.content.trim()

    // Agregar respuesta de la IA al chat
    const aiMessageDiv = document.createElement("div")
    aiMessageDiv.className = "message ai-message"
    aiMessageDiv.textContent = aiResponse
    chatMessages.appendChild(aiMessageDiv)

    // Agregar respuesta al historial
    chatHistory.push({ role: "assistant", content: aiResponse })

    // Desplazarse hacia abajo
    chatMessages.scrollTop = chatMessages.scrollHeight
  } catch (error) {
    console.error("Error en chat:", error)
    chatError.textContent = "Error al enviar el mensaje. Por favor, intenta nuevamente."
  } finally {
    chatLoading.style.display = "none"
  }
}

function startQuiz() {
  if (selectedTopic && selectedTopic.questions) {
    currentQuizQuestions = [...selectedTopic.questions] // Copia de las preguntas
    userAnswers = {}
    timeLeft = 15 * 60 // Restablecer tiempo a 15 minutos

    quizTopicTitle.textContent = selectedTopic.title
    loadQuizQuestions()
    startTimer()
    showView("quiz-view")
  } else {
    alert("No hay preguntas disponibles para este tema.")
  }
}

function loadQuizQuestions() {
  quizForm.innerHTML = ""
  unansweredWarning.style.display = "none"

  currentQuizQuestions.forEach((question, index) => {
    const questionDiv = document.createElement("div")
    questionDiv.className = "question-block"
    questionDiv.dataset.questionIndex = index

    let questionHTML = `<p>${index + 1}. ${question.question}</p>`

    question.options.forEach((option, optionIndex) => {
      questionHTML += `
        <label>
          <input type="radio" name="question-${index}" value="${optionIndex}">
          ${option}
        </label>
      `
    })

    questionDiv.innerHTML = questionHTML
    quizForm.appendChild(questionDiv)

    // Agregar event listeners para las respuestas
    const radioButtons = questionDiv.querySelectorAll('input[type="radio"]')
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", () => {
        userAnswers[index] = Number.parseInt(radio.value)
        questionDiv.classList.remove("unanswered")
      })
    })
  })
}

function startTimer() {
  updateTimerDisplay()
  timerInterval = setInterval(() => {
    timeLeft--
    updateTimerDisplay()

    if (timeLeft <= 0) {
      stopTimer()
      submitQuiz()
    }
  }, 1000)
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  timerDisplay.innerHTML = `<i class="fas fa-clock"></i> Tiempo restante: ${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`
}

function submitQuiz() {
  // Verificar si todas las preguntas han sido respondidas
  const unansweredQuestions = []
  for (let i = 0; i < currentQuizQuestions.length; i++) {
    if (userAnswers[i] === undefined) {
      unansweredQuestions.push(i)
    }
  }

  if (unansweredQuestions.length > 0) {
    // Mostrar advertencia y resaltar preguntas sin responder
    unansweredWarning.style.display = "block"
    unansweredQuestions.forEach((questionIndex) => {
      const questionBlock = document.querySelector(`[data-question-index="${questionIndex}"]`)
      questionBlock.classList.add("unanswered")
    })
    // Desplazarse a la primera pregunta sin responder
    const firstUnanswered = document.querySelector(`[data-question-index="${unansweredQuestions[0]}"]`)
    firstUnanswered.scrollIntoView({ behavior: "smooth", block: "center" })
    return
  }

  stopTimer()
  calculateResults()
  showView("results-view")
}

function calculateResults() {
  let correctAnswers = 0
  const results = []

  currentQuizQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index]
    const isCorrect = userAnswer === question.correctAnswerIndex

    if (isCorrect) {
      correctAnswers++
    }

    results.push({
      question: question.question,
      userAnswer: userAnswer,
      correctAnswer: question.correctAnswerIndex,
      options: question.options,
      isCorrect: isCorrect,
    })
  })

  const score = Math.round((correctAnswers / currentQuizQuestions.length) * 100)

  // Mostrar resultados
  resultsTopicTitle.textContent = selectedTopic.title
  scoreDisplay.textContent = `${score}% (${correctAnswers}/${currentQuizQuestions.length})`

  // Mostrar detalles de cada pregunta
  resultsDetails.innerHTML = ""
  results.forEach((result, index) => {
    const resultDiv = document.createElement("div")
    resultDiv.className = `result-item ${result.isCorrect ? "correct" : "incorrect"}`

    resultDiv.innerHTML = `
      <p><strong>Pregunta ${index + 1}:</strong> ${result.question}</p>
      <p><strong>Tu respuesta:</strong> ${result.options[result.userAnswer] || "Sin respuesta"}</p>
      <p><strong>Respuesta correcta:</strong> ${result.options[result.correctAnswer]}</p>
      <p><strong>Resultado:</strong> ${result.isCorrect ? "✓ Correcto" : "✗ Incorrecto"}</p>
    `

    resultsDetails.appendChild(resultDiv)
  })

  // Generar recomendaciones
  let recommendationText = ""
  if (score >= 80) {
    recommendationText =
      "¡Excelente trabajo! Tienes un buen dominio del tema. Puedes continuar con el siguiente tema o revisar otros cursos."
  } else if (score >= 60) {
    recommendationText =
      "Buen trabajo, pero hay áreas de mejora. Te recomendamos revisar el resumen del tema y practicar más antes de continuar."
  } else {
    recommendationText =
      "Necesitas estudiar más este tema. Te sugerimos revisar cuidadosamente el resumen, hacer preguntas en el chat y volver a intentar el quiz."
  }

  recommendations.textContent = recommendationText
}

// ===== EVENT LISTENERS =====
loginButton.addEventListener("click", handleLogin)
registerButton.addEventListener("click", handleRegister)
registerForm.addEventListener("submit", handleRegister)
registerLinkButton.addEventListener("click", () => showView("register-view"))
loginLinkButton.addEventListener("click", () => showView("login-view"))
logoutButton.addEventListener("click", handleLogout)
topicLogoutButton.addEventListener("click", handleLogout)

backToCoursesButton.addEventListener("click", () => {
  selectedCourse = null
  selectedTopic = null
  showView("course-selection-view")
})

backToCoursesFromResults.addEventListener("click", () => {
  selectedCourse = null
  selectedTopic = null
  showView("course-selection-view")
})

chatBackButton.addEventListener("click", () => showView("topic-selection-view"))

sendChatButton.addEventListener("click", sendChatMessage)
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault()
    sendChatMessage()
  }
})

startQuizButton.addEventListener("click", startQuiz)
submitQuizButton.addEventListener("click", submitQuiz)

tryAgainButton.addEventListener("click", () => {
  startQuiz()
})

resultsBackButton.addEventListener("click", () => {
  showView("topic-selection-view")
})

// Event listeners para cambio de tema
themeToggleBtn.addEventListener("click", toggleTheme)
registerThemeToggleBtn.addEventListener("click", toggleTheme)
themeToggleMain.addEventListener("click", toggleTheme)
themeToggleTopics.addEventListener("click", toggleTheme)
themeToggleChat.addEventListener("click", toggleTheme)
themeToggleResults.addEventListener("click", toggleTheme)

// Event listeners para el editor de sílabo
addTopicButton.addEventListener("click", () => {
  const topicCount = topicsEditor.children.length
  const newTopicHTML = `
    <div class="topic-edit-item" data-topic-id="new-topic-${topicCount}">
      <div class="topic-edit-header">
        <div class="topic-edit-title">
          <i class="fas fa-file-alt"></i> Nueva Semana
        </div>
        <div class="topic-edit-actions">
          <button class="icon-button edit" title="Editar tema"><i class="fas fa-edit"></i></button>
          <button class="icon-button delete" title="Eliminar tema"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="topic-edit-content" style="display: block;">
        <div class="input-group">
          <label>Título de la semana:</label>
          <input type="text" class="topic-title-input" value="Semana ${topicCount + 1}: Nuevo Tema">
        </div>
        <div class="input-group">
          <label>Resumen:</label>
          <textarea class="topic-summary-input" rows="4" placeholder="Ingrese el resumen del tema aquí..."></textarea>
        </div>
        <button class="ai-generate-btn generate-summary-btn" data-topic-index="${topicCount}">
          <i class="fas fa-magic"></i> Generar resumen con IA
        </button>
        <div class="ai-loading summary-loading-${topicCount}" style="display: none;">
          <i class="fas fa-spinner fa-spin"></i> Generando resumen...
        </div>
        
        <!-- Sección de preguntas -->
        <div class="questions-section">
          <h4><i class="fas fa-question-circle"></i> Preguntas de evaluación</h4>
          <div class="questions-container" id="questions-container-new-topic-${topicCount}">
          </div>
          <button class="add-question-btn" data-topic-id="new-topic-${topicCount}">
            <i class="fas fa-plus"></i> Añadir pregunta
          </button>
          <button class="generate-questions-btn" data-topic-id="new-topic-${topicCount}">
            <i class="fas fa-magic"></i> Generar preguntas con IA
          </button>
          <div class="ai-loading questions-loading-new-topic-${topicCount}" style="display: none;">
            <i class="fas fa-spinner fa-spin"></i> Generando preguntas...
          </div>
        </div>
      </div>
    </div>
  `

  topicsEditor.insertAdjacentHTML("beforeend", newTopicHTML)

  // Agregar event listeners al nuevo elemento
  const newElement = topicsEditor.lastElementChild
  const editBtn = newElement.querySelector(".edit")
  const deleteBtn = newElement.querySelector(".delete")
  const generateBtn = newElement.querySelector(".generate-summary-btn")
  const addQuestionBtn = newElement.querySelector(".add-question-btn")
  const generateQuestionsBtn = newElement.querySelector(".generate-questions-btn")

  editBtn.addEventListener("click", () => {
    const content = newElement.querySelector(".topic-edit-content")
    content.style.display = content.style.display === "none" ? "block" : "none"
  })

  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta semana?")) {
      newElement.remove()
    }
  })

  generateBtn.addEventListener("click", (e) => {
    const topicIndex = e.currentTarget.dataset.topicIndex
    const titleInput = newElement.querySelector(".topic-title-input")
    generateSummaryWithAI(titleInput.value, topicIndex)
  })

  addQuestionBtn.addEventListener("click", (e) => {
    const topicId = e.currentTarget.dataset.topicId
    addNewQuestion(topicId)
  })

  generateQuestionsBtn.addEventListener("click", (e) => {
    const topicId = e.currentTarget.dataset.topicId
    const titleInput = newElement.querySelector(".topic-title-input")
    const summaryInput = newElement.querySelector(".topic-summary-input")
    generateQuestionsWithAI(topicId, titleInput.value, summaryInput.value)
  })
})

saveSyllabusButton.addEventListener("click", saveSyllabus)

// Permitir Enter para enviar en el login
emailInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleLogin()
  }
})

passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleLogin()
  }
})

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar tema
  initTheme()

  // Verificar si hay una sesión guardada
  const savedEmail = localStorage.getItem("userEmail")
  const savedName = localStorage.getItem("userName")
  const savedRole = localStorage.getItem("userRole")

  if (savedEmail && savedName) {
    userEmail = savedEmail
    userName = savedName
    userRole = savedRole || "student"

    userEmailDisplay.textContent = userEmail
    userNameDisplay.textContent = userName

    loadCourses()
    showView("course-selection-view")
  } else {
    showView("login-view")
  }
})
