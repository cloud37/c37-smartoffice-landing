<template>
  <div class="bg-white">
    <main>
      <div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <div>
              <Logo />
            </div>
            <div class="mt-20">
              <div class="mt-6 sm:max-w-xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Smarthome meets Office</h1>
                <p class="mt-6 text-xl text-gray-500">Kostenersparnis durch automatisierte und intelligente Steuerung von Beleuchtung, Heizung und Klimaanlage</p>
              </div>
              <form @submit.prevent="sendToForm" class="mt-12 sm:flex sm:w-full sm:max-w-lg">
                <input type="text" name="date" :value="getDate" hidden />
                <div class="min-w-0 flex-1">
                  <label for="hero-email" class="sr-only">Email Adresse</label>
                  <input id="hero-email" v-model="email" name="email" type="email" class="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-c37-500 focus:ring-c37-500" placeholder="Ihre E-Mail Adresse" />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <button type="submit" class="block w-full rounded-md border border-transparent bg-c37-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-c37-600 focus:outline-none focus:ring-2 focus:ring-c37-500 focus:ring-offset-2 sm:px-10">Unverbindliche Anfrage</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div class="hidden sm:block">
              <div class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
              <svg class="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div class="relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="https://images.unsplash.com/photo-1599232973607-2d3ec0c376d6?ixlib=rb-4.0.3&dl=mika-baumeister-8KNKduSSVSc-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative mt-20">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div class="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              <div class="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img class="absolute inset-0 h-full w-full object-cover" src="https://cloud37.de/wp-content/uploads/sites/2/2022/05/Florian_Wartner_mid1.jpeg" alt="Florian Wartner" />
                <div class="absolute inset-0 bg-c37-500 mix-blend-multiply" />
                <div class="absolute inset-0 bg-gradient-to-t from-c37-600 via-c37-600 opacity-90" />
                <div class="relative px-8">
                  <blockquote class="mt-8">
                    <div class="relative text-lg font-medium text-white md:flex-grow">
                      <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-c37-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p class="relative">Smarthome-Technologie erleichtert mir den Alltag Zuhause. Aber auch während der Arbeit können mir diese Technolgien helfen, produktiver zu sein und mich auf das Wesentliche zu konzentrieren.</p>
                    </div>

                    <footer class="mt-4">
                      <p class="text-base font-semibold text-c37-200"><a href="https://www.linkedin.com/in/florian-wartner-7a7658b8/">Florian Wartner</a>, Smarthome Spezialist @ cloud37</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
              <div class="mt-6 space-y-6 text-gray-500">
                <p class="text-base leading-7">Verbessern Sie die Effizienz und senken Sie die Kosten in Ihrem Büro mit unseren Smarthome-Lösungen. Mithilfe von Technologien wie Matter, MQTT, Zigbee und andere Plattformen ermöglichen wir es Ihnen, die Beleuchtung, Heizung und Klimaanlage automatisch zu steuern und somit Energie zu sparen.</p>
                <p class="text-base leading-7">Profitieren Sie von der einfachen Bedienung und der Möglichkeit, die Steuerung per Smartphone oder Tablet vorzunehmen. Fordern Sie jetzt eine unverbindliche Beratung an und erfahren Sie, wie Sie Ihr Büro auf die Zukunft vorbereiten können.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-32">
        <div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">Nutzen Sie gemeinsam mit Ihren Mitarbeitern die Vorteile der neuesten Technologien wie Matter, MQTT, Zigbee und anderen Plattformen, um Kosten zu sparen und die Effizienz in Ihrem Büro zu steigern.</p>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div v-for="logo in logos" :key="logo.name" class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img class="object-scale-down h-24 w-96" :src="logo.url" :alt="logo.name" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" class="hidden sm:block">
          <div class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
          <svg class="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div class="relative overflow-hidden rounded-2xl bg-c37-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                <path class="text-c37-400 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                <path class="text-c37-600 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
              </svg>
            </div>
            <div class="relative">
              <div class="sm:text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Jetzt unverbindlich beraten lassen</h2>
                <p class="mx-auto mt-6 max-w-2xl text-lg text-c37-100">Erfahren Sie jetzt, wie Sie durch Smarthome-Technologie im Büro Kosten sparen können. Fordern Sie jetzt eine unverbindliche Beratung an und lassen Sie sich von unseren Experten individuell beraten.</p>
              </div>
              <form @submit.prevent="sendToForm" class="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <input type="text" :value="getDate" hidden />
                <div class="min-w-0 flex-1">
                  <label for="cta-email" class="sr-only">Email Adresse</label>
                  <input id="cta-email" v-model="email" type="email" name="email" class="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-c37-500" placeholder="Ihre E-Mail Adresse" />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <button type="submit" class="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-c37-500 sm:px-10">Unverbindliche Anfrage</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="mt-24 bg-gray-900 sm:mt-12">
      <div class="mx-auto max-w-md overflow-hidden py-12 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div v-for="item in footerNavigation" :key="item.name" class="px-5 py-2">
                <a :href="item.href" class="text-base text-gray-400 hover:text-gray-300">{{ item.name }}</a>
            </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
            <a v-for="item in socialNavigation" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-300">
                <a :href="item.href" class="text-base text-gray-400 hover:text-gray-300">{{ item.name }}</a>
            </a>
        </div>
        <p class="mt-8 text-center text-base text-gray-400">&copy; 2023 cloud37 Deutschland GmbH. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
        email: '',
        currentTime: null,
        logos: [
            {
                'name': 'Philips Hue',
                'url': 'https://res.cloudinary.com/dtzn0cvga/image/upload/v1673438149/smartoffice-landing/hue_logo_retfq0.png'
            },
            {
                'name': 'Google Assistant',
                'url': 'https://res.cloudinary.com/dtzn0cvga/image/upload/v1673438149/smartoffice-landing/google_assistant_logo_jgm4mn.png'
            },
            {
                'name': 'Alexa',
                'url': 'https://res.cloudinary.com/dtzn0cvga/image/upload/v1673438149/smartoffice-landing/alexa_logo_trt7vd.png'
            },
            {
                'name': 'Zigbee',
                'url': 'https://res.cloudinary.com/dtzn0cvga/image/upload/v1673438149/smartoffice-landing/zigbee_logo_uyyi5k.png'
            },
            {
                'name': 'MQTT',
                'url': 'https://res.cloudinary.com/dtzn0cvga/image/upload/v1673438149/smartoffice-landing/mqtt_logo_det573.png'
            },
            {
                'name': 'matter',
                'url': 'https://res.cloudinary.com/dtzn0cvga/image/upload/v1673438149/smartoffice-landing/matter_logo_oz4hxh.png'
            }
        ],
        footerNavigation: [
            { name: 'cloud37', href: 'https://cloud37.de/' },
            { name: 'Über Uns', href: 'https://cloud37.de/unser-ziel/' },
            { name: 'Jobs', href: 'https://cloud37.de/karriere/' },
            { name: 'Insights', href: 'https://cloud37.de/insights/' },
            { name: 'Kontakt', href: 'https://cloud37.de/kontakt/' },
            { name: 'Impressum', href: 'https://cloud37.de/impressum/' },
        ],
        socialNavigation: [
            { name: 'LinkedIn', href: 'https://www.linkedin.com/company/cloud37-gmbh' },
            { name: 'GitHub', href: 'https://github.com/cloud37' },
        ]
    }
  },

  mounted: function() {
    this.getDate();
  },

  methods: {
    getDate() {
        this.currentTime = this.$moment().format('MMMM Do YYYY, h:mm:ss')
    },

    async sendToForm() {
        await this.$axios.$post('https://n8n.c37-dev.de/webhook/ff10940f-ae44-4341-b2c8-4450a473ae70', {
            email: this.email,
            date: this.currentTime
        })
        .then(function(response) {
            window.location.href = "/thankyou";
        })
    }
  }
}
</script>
