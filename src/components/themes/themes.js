const Themes = {
    Default : {
        BackgroundColorPrimary : `rgba(217, 217, 217, 0.5)` ,
    
        BackgroundMenu: `#BDC0CA`
    }, 

    lightTheme : {
    
        Background: `url(../../image/pokemon-dia.jpg) no-repeat center / cover`,
    
        BackgroundCardLight: '#E5E4E4',

        ButtonContentLight: '#3B5BA7',  
        ButtonLight: '#FFCB05',

        ButtonAnim:'translateX(0px)',
    
        BoxShadowLight:'rgba(0, 0, 0, 0.2)',
        Color: '#000'
    },

    darkTheme : {
    
        Background: `url(../../image/pokemon-noite.jpg) no-repeat center / cover`,
    
        BackgroundCardDark: '#939393',
    
        ButtonContentLight: '#FFCB05',
        ButtonLight: '#3B5BA7',

        ButtonAnim:'translateX(52px)',
    
        BoxShadowDark:'rgba(255, 255, 255, 0.2)',
    
        Color: '#fff'
    }
}

export default Themes