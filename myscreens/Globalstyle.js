import { StyleSheet } from 'react-native'
const Globalstyle = StyleSheet.create({
    main:{
        backgroundColor:'#276FDD',
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:70,
        width:85,
    },
    whole:{
       flexDirection:'row',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       top:230,
       right:40      
    },
    icon:{
        display:'flex',
        flexDirection:'row',
        top:250,
        borderWidth:1,
        borderRadius:16.73,
        width:251,
        borderColor:'#fff',
        marginTop:25
    },
   
    //Pickup and drop module styles
    
    primrytext: {
        fontSize: 30,
        color: '#EDF6FF',
        top: 55 

    },
    
    Packagestxt: {
        fontSize: 16,
        color: '#EDF6FF',
        top: 85,
        width: 295
    },
    Packagebtntxt: {
        color: '#EDF6FF', paddingTop: 8, fontSize: 20


    },
    Packagesrvcbtn:{
        borderWidth:1,alignItems:'center',width:310,top:145,height:50,backgroundColor:'black',color:'#FFFFFF' 
                
    },
    Packagebtn: {
        
        borderWidth: 1,
        alignItems: 'center',
        width: 310,
        top: 130,
        height: 50,
        backgroundColor: 'black',
        color: '#FFFFFF' 
    },
    imgdata: {
        width: 300,
        height: 200,
        left: 0,
        top: 40 
    },
    iconifo:{
        color: '#EDF6FF',
        left: 90
    },
    iconinfostyle: {
        color: '#EDF6FF',
        
        bottom: 17, left: 20
    },
    //reciving package
    Pickhmcontainer: {
        backgroundColor: '#1A1A1A',
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        top: 0
    },
    label: {
        fontSize: 21.6,
        color: '#EDF6FF',
        top: 95,
        left: 10
    },
    rvcimg: {
        width: 30,
        height: 25,
        left: 10,
        top: 110 
    },
    iconcontact: {
        left:230
    },
    phone: {
        fontSize: 24,
        color: '#EDF6FF',
        top: 80,
        left: 55
    },
    heading: {
        fontSize: 33,
        color: '#EDF6FF',
        top: 55,
        width: 314,
        left: 10
    },
    rvcsecondtxt: {
        fontSize: 14,
        color: '#EDF6FF',
        top: 85,
        width: 314,
        left: 10
    },
    rvcbtn: {
        borderWidth: 1,
        alignItems: 'center',
        width: 310,
        // top: 30,
        marginVertical:150,
        height: 50,
        backgroundColor: 'black',
        color: '#FFFFFF',
        left:10
        // zIndex:1
        
               
    },
    rvcbtnlbl: {
        color: '#EDF6FF',
        paddingTop: 8,
        fontSize: 20
    },
    input: {
        height: 58,
        margin: 12,
        borderWidth: 1,
        borderColor:"#FFFF",
        padding: 10,
        color: "#FFFF",
        top: 100,
        fontSize:24
    },
    inputtwo: {
        height: 50,
        margin: 12,
        padding: 10,
        color: "#FFFF",
        left: 90,
        top: 30,
        width: 300,
        fontSize:24
        
    },
    icon1: {
        alignItems: 'flex-start',
        right: 150,
        top: 15
    },
    iconback: {
        alignItems: 'left',
        top: 18
     },
    errorone: {
        color: 'red',
        fontSize: 12,
        top: 94,
        left:20
        // marginVertical:20,        
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 8,
        left:20
    },
    sendbtn: {
        borderWidth: 1,
        alignItems: 'center',
        width: 310,
        // top: 30,
        marginVertical: 130,
        height: 50,
        backgroundColor: 'black',
        color: '#FFFFFF',
        left: 10
    },
    contentbg: {
        backgroundColor: '#535aff'
    },
    content: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 20
    },
    locationcont: {
        paddingVertical: 15,
    },
    locationText: {
        fontSize: 25,
        color: '#fff'
    },
    Touchablebut: {
        borderRadius: 40,
        backgroundColor: '#000',
        padding: 10,
        width: '70%',
    },
    Touchablebuttext: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    imagecontbg: {
        backgroundColor: '#000'
    },
    imagecontmain: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    imagecont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    imagetxt: {
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 10,
        color: '#fff'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    textinput: {
        backgroundColor: '#2B2B2B',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 15,
        borderRadius: 10,
        fontSize: 20
    },
    aroundtext: {
        fontSize: 22,
        color: 'white',
        paddingVertical: 13
    },
    mapContainer:{
        width:'85%',
        marginLeft:'auto',
        marginRight:'auto',
        paddingBottom:30
    },
    mapCont:{
        width:'100%',
        height: 150,
    },
   
})
 
export default Globalstyle