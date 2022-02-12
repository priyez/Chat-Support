
export const styles = {

    chatmeUp: {
        cursor: 'pointer',
        // Size
        width: '64px',
        height: '64px',
        // Background
      
        backgroundSize: '84px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        borderRadius: '50%',
         
	        

    },

avatar:{
    // Color
    color: 'black',
    backgroundColor:'#f9f0ff',
    // Position
    position: 'absolute', 
        left: 'calc((-100% - 75px) - 90px)', 
        top: 'calc(50% - 24px)', 
    // Layer
    borderRadius:'24px',
    padding:'17px 12px 12px 14px',
    boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    zIndex:'10000',


},
chatWindow: {
        // Position
        position: 'fixed',
        bottom: '116px',
        right: '24px',
        // Size
        width: '265px',
        height: '315px',
        maxWidth: 'calc(100% - 40px)',
        maxHeight: 'calc(100% - 40px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #7a39e0`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '308px',
        backgroundColor: '#7a39e0',
        transform: 'skewY(-12deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        height:'16px',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #7a39e0',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '95%', 
        color: '#7a39e0', 
        fontSize: '9px', 
        fontWeight: '600' 
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: '#7a39e0', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }


}