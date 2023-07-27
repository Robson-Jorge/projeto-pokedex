import FundoImagemLight from '../image/pokemon-dia.jpg'
import FundoImagemDark from '../image/pokemon-noite.jpg'
import FundoModalLight from '../image/pokemon-modal-dia.png'
import FundoModalDark from '../image/pokemon-modal-noite.png'
import FundoModalInfo from '../image/Rectangle42.png'

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