import FundoImagemLight from '../../image/pokemon-dia.jpg'
import FundoImagemDark from '../../image/pokemon-noite.jpg'

const Themes = {
    Default : {
        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,

        BackgroundHover:'linear-gradient(180deg, #0F3 0%, #00C3C5 50%, #03266F 100%)',

    
        BackgroundMenu: `#BDC0CA`,

        ColorLightPoke: '#FFCB05',

        ColorDarkPoke: '#3B5BA7', 
    }, 

    lightTheme : {
        Title: 'Light',

        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,
        BackgroundMenu: `#BDC0CA`,
    
        Background: FundoImagemLight,
    
        BackgroundCard: 'rgba(198, 198, 198, 0.68)',

        ButtonContentLight: '#3B5BA7',  
        ButtonLight: '#FFCB05',

        ButtonAnim:'translateX(0px)',
    
        BoxShadowLight:'rgba(0, 0, 0, 0.2)',
        Color: '#000'
    },

    darkTheme : {
        Title: 'Dark',

        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,
        BackgroundMenu: `#BDC0CA`,
    
        Background: FundoImagemDark,
    
        BackgroundCard: 'rgba(110, 110, 110, 0.80)',
    
        ButtonContentLight: '#FFCB05',
        ButtonLight: '#3B5BA7',

        ButtonAnim:'translateX(52px)',
    
        BoxShadowDark:'rgba(255, 255, 255, 0.2)',
    
        Color: '#e1e1e1'
    }
}

export default Themes