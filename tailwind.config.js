/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-1' : '#131D26',
        'gray-1' : '#A1ACB8',
        'navy-2' : '#2B3D4D',
        'gray-2' : '#213240',
        'navy-3' : '#213240',
        'gray-3' : '#C8D4E5',
        'gray-4' : '#7D8DA4',
        'red-1' : '#FF6720',
        'gray-5' : '#F0F1F3',
        'gray-6' : '#858F9B' ,
        'gray-7' : '#929DAA',
        'orange-1' : '#FF6720',
        'black-1' : '#2C333A',
        'gray-8' : '#E2E7ED',
        'gray-10' : '#F8F9FB',
        'gray-9' : '#5A6271',
        'green-1' : '#23C247',
        'red-2' : '#EB3B5B',
        'gray-11' : '#EBEDEF',
        'gray-12' : '#E9EDF2',
        'yellow-1' : '#FFC107',
        'blue-1' : '#0184FF'
      },
      spacing: {
        '17' : '17px',
        '30' : '30px',
        '77' : '77px',
        '19' : '19px',
        '25' : '25px',
        '1.75' : '7px',
        '7.5' : '30px',
        '33' : '33px',
        '368' : '368px',
        '34' : '34px',
        '13' : '13px',
        '289' : '580px',
        '282' : '282px',
        '98' : '98px',
        '300' : '300px',
        '264' : '264px',
        '66' : '66px',
        '228' : '228px',
        '1.5' : '6px',
        '708' : '708px',
        '72' : '72px'
      },
      width: {
        '3/7' : '42.8571%'
      },
      height : {
        '1/14' : '7.1429%',
        '12/14' : '85.7142%'
      },
      fontFamily: {
        'inter' : ['Inter', 'sans-serif']
      },
      borderRadius: {
        '4xl' : '33px',
        'xl-1' : '10px',
        '2xl-1' : '17px',
        '2xl-2' : '19px'

      },
      fontSize : {
        '3.5xl' : '34px',
        'xs-1' : '13px',
        '3.25' : '32px'
      },
      lineHeight: {
        '8.5': '34px'
      },
      maxHeight: {
        '90' : '91%',
        '80' : '65%'
      },
      maxWidth : {
        '2/3' : '66.6667%',
        '455' : '455px'
      },
      borderWidth: {
        '1.5' : '3px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
