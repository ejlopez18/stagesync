import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const stagesync = {
  dark: false,
  colors: {
    background: '#F8F6F1',
    surface: '#FFFFFF',
    'surface-variant': '#F2EFE8',
    primary: '#D4A017',
    'primary-darken-1': '#B88A10',
    secondary: '#0A0A0A',
    'secondary-darken-1': '#1A1A1A',
    error: '#E53E3E',
    success: '#22A05B',
    warning: '#D97706',
    info: '#3B82F6',
    'on-primary': '#0A0A0A',
    'on-secondary': '#FFFFFF',
    'on-background': '#0A0A0A',
    'on-surface': '#0A0A0A',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'stagesync',
    themes: { stagesync },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
      rounded: 'lg',
      elevation: 0,
    },
    VCard: {
      elevation: 0,
      rounded: 'xl',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      rounded: 'lg',
      hideDetails: 'auto',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
      rounded: 'lg',
      hideDetails: 'auto',
    },
    VChip: {
      rounded: 'lg',
    },
  },
})
