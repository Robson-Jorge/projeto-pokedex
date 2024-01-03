import FundoImagemLight from '../assets/image/pokemon-dia.webp'
import FundoImagemLightMobile from '../assets/image/pokemon-dia-mobile.webp'
import FundoImagemDark from '../assets/image/pokemon-noite.webp'
import FundoImagemDarkMobile from '../assets/image/pokemon-noite-mobile.webp'
import FundoModalLight from '../assets/image/pokemon-modal-dia.webp'
import FundoModalDark from '../assets/image/pokemon-modal-noite.webp'
import FundoModalInfo from '../assets/image/bg-modal-info.webp'

const Themes = {
    Default : {
        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,

        BackgroundHover:'linear-gradient(180deg, #0F3 0%, #00C3C5 50%, #03266F 100%)',

        BackgroundModalInfo: FundoModalInfo,
    
        BackgroundMenu: `#BDC0CA`,

        ColorLightPoke: '#FFCB05',

        ColorDarkPoke: '#3B5BA7', 
    }, 

    lightTheme : {
        Title: 'Light',

        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,
        BackgroundMenu: `#BDC0CA`,
    
        BackgroundMain: FundoImagemLight,
        BackgroundMainMobile: FundoImagemLightMobile,
        BackgroundModal: FundoModalLight,
    
        BackgroundCard: 'rgba(198, 198, 198, 0.68)',

        ButtonTogglerContent: '#3B5BA7',  
        ButtonToggler: '#FFCB05',

        ButtonAnim:'translateX(0px)',
    
        BoxShadowLight:'rgba(0, 0, 0, 0.2)',
        Color: '#000'
    },

    darkTheme : {
        Title: 'Dark',

        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,
        BackgroundMenu: `#BDC0CA`,
    
        BackgroundMain: FundoImagemDark,
        BackgroundMainMobile: FundoImagemDarkMobile,

        BackgroundModal: FundoModalDark,

        BackgroundCard: 'rgba(110, 110, 110, 0.80)',
    
        ButtonTogglerContent: '#FFCB05',
        ButtonToggler: '#3B5BA7',

        ButtonAnim:'translateX(52px)',
    
        BoxShadowDark:'rgba(255, 255, 255, 0.2)',
    
        Color: '#e1e1e1'
    }
}

export default Themes