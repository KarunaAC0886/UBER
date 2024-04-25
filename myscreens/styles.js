import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    acnt_main_cntr: {
        height: '100%',
        width: '100%',
    },
    acnt_frst_cont: {
        width: '100%',
        height: '30%',
        backgroundColor: '#000000',
        paddingTop: '6%',
        paddingHorizontal: '6%'
    },
    acnt_prfl_cont: {
        flex: 0,
        height: '65%',
        flexDirection: 'row',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        // backgroundColor:'lightgreen'
    }
    , acnt_prfl_subcont1: {
        width: 100,
        flex: 0.5,
        height: 100
    },
    acnt_prfl_subcont2: {
        flex: 1,
        paddingTop: '7%',
        textAlign: 'left'
    },
    acnt_prfl_img: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    acnt_prfl_nm: {
        color: '#EDF6FF',
        fontSize: 23
    },
    acnt_frst_msg_cont: {
        height: '35%',
        width: '100%',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //    backgroundColor:'green'
    },
    acnt_frst_msg_btn: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    acnt_frst_msglbl: {
        color: '#ffffff',
        fontSize: 20,
    },
    acnt_frst_rgtarrow: {
        color: '#ffffff',
        fontSize: 20,
        paddingRight: 30
    },
    acnt_scnd_cont: {
        width: '100%',
        height: '70%',
        backgroundColor: '#1A1A1A',
        padding: '6%',
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    acnt_scnd_cont_sub1: {
        flex: 0,
        flexDirection: 'column'
    },
    acnt_scnd_cont_sub2: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    acnt_scnd_cont_sub1_btnactns: {
        paddingVertical: '4%'
    },
    acnt_scnd_cont_sub1_btntxt: {
        color: '#ffffff',
        fontSize: 20
    },
    acnt_scnd_cont_sub1_legaltxt: {
        color: '#ffffff',
        fontSize: 14
    },
    //BackNavigator styles
    back_act_cont: {
        height: '13%',
        paddingHorizontal: '6%',
        justifyContent: 'space-between',
        paddingVertical: '2%',
        paddingBottom: '5%',
        width: '100%',
        backgroundColor: '#000000',

    },
    Back_act_cont_leftarrow: {
        fontSize: 20,
        color: '#ffffff'
    },
    Back_act_cont_title: {
        fontSize: 36,
        color: '#ffffff',
        fontFamily: 'Roboto'

    },
    Messages_main_cont: {
        height: '100%',
        width: '100%',

    },
    Messages_content: {
        paddingHorizontal: '6%',
        paddingVertical: '6%',
        paddingTop: '15%',
        height: '90%',
        width: '100%',
        backgroundColor: '#1A1A1A',
        flex: 0,
        flexDirection: 'column'
    },
    Messages_frst_cont: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Messages_frst_cont_img: {
        width: 290,
        height: 200
    },
    Messages_second_cont: {
        width: '100%',
        paddingTop: '10%',
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '40%'
    },
    Messages_content_frsttext: {
        color: '#ffffff',
        fontSize: 20
    }, Messages_content_scndtext: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: '4%'
    },
    //Trips Page Styling
    Trippg_main_cont: {
        width: '100%',
        height: '100%'
    },
    //Trips child Past page styling
    PastTrippg_main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    PastTrippg_main_contnr: {
        width: '70%',
        height: '40%',
        alignSelf: 'center',

        // backgroundColor:'white',
    },
    PastTrippg_content_frstln: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: "700",
        fontSize: 20
    },
    PastTrippg_retry_btn_contr: {
        width: '100%',
        height: '40%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    PastTrippg_retry_btn: {
        borderColor: '#ffffff',
        borderWidth: 1,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PastTrippg_retry_btn_txt: {
        color: '#ffffff',
        fontSize: 18
    },
    //Upcoming Trips page styles
    UpcomTrippg_main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A'
    },
    UpcomTrippg_frst_cont: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    UpcomingTrips_contct_btn: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
        marginTop: 30
    },
    UpcomTrippg_frst_txt: {
        color: '#ffffff',
        fontSize: 18
    },
    UpcomingTrips_contct_btn_txt: {
        color: '#ffffff',
        fontSize: 18
    },
    //Payment Page styles
    Paymentpg_main: {
        width: '100%',
        height: '100%',
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#000',
    },
    Paymentpg_frst_cont: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    Paymentpg_frst_adpaymnt: {
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2,
        paddingHorizontal: '6%'
    },
    Paymentpg_frst_adpaymnt_lbl: {
        color: "#535AFF",
        fontWeight: "400",
        fontSize: 18
    },
    Paymentpg_scnd_cont: {
        width: '100%',
        height: '34%',
        borderBottomWidth: 0.2,
        borderBottomColor: '#979797'
    },
    Paymentpg_scndcont_frsttxt: {
        paddingHorizontal: '6%',
        paddingTop: '3%',
        color: '#EDF6FF',
        fontWeight: '400',
        fontSize: 18
    },
    Paymentpg_scnd_prflone: {
        width: '100%',
        height: '40%',
        paddingHorizontal: '6%',
        flex: 0,
        flexDirection: 'row'
    },
    Paymentpg_scnd_prflimg: {
        width: 60,
        height: 60,
        marginTop: '4%',
        flex: 0,
    },
    Paymentpg_scnd_prfl_prsnl_cont: {
        flex: 0,
        width: '78%',
        flexDirection: 'column',
        paddingLeft: '10%',
        justifyContent: 'center'
    },
    Paymentpg_scnd_prfl_prsnl_txt: {
        color: '#EDF6FF',
        fontSize: 18,
        fontWeight: '400',
        width: '100%'
    },
    Paymentpg_scnd_prfl_bsns_txt: {
        color: '#535AFF',
        fontSize: 18
    },
    Paymentpg_scnd_prfl_bsns_txt2: {
        color: '#DADADA',
        fontSize: 14,
        fontWeight: '400'
    },
    Paymentpg_trd_cont: {
        width: '100%',
        height: '20%',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2,
        padding: '2%'
    },
    Paymentpg_trd_frsttxt: {
        color: '#EDF6FF',
        fontSize: 18,
        paddingLeft: '6%',
        fontWeight: '400'
    },
    Paymentpg_trd_scnd_cont: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        marginTop: '4%',
        paddingLeft: '6%',
        // backgroundColor:'gray'
    },
    Paymentpg_trd_promoimg: {
        width: '15%',
        height: '75%'
    },
    Paymentpg_trd_prom_secttl: {
        paddingLeft: '8%',
        color: '#EDF6FF',
        fontSize: 18, fontWeight: '400',
        paddingTop: '2%'
    },
    Paymentpg_trd_addpromo_btn: {
        paddingLeft: '6%'
    },
    Paymentpg_trd_addpromo_txt: {
        color: '#535AFF',
        fontSize: 18,
        fontWeight: '400'
    }, Paymentpg_fourt_cont: {
        width: '100%',
        height: '20%',
        padding: '2%'
    },
    //UberPass page styling
    Uberpasspg_main_page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A'
    },
    UberPasspg_cont: {
        flex: 0,
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    UberPasspg_frst_cont: {
        height: "25%",
        flex: 0,
        flexDirection: 'column',
        paddingHorizontal: '6%',
        justifyContent: 'space-around'
    },
    UberPasspg_frst_uptxt: {
        color: '#EDF6FF',
        fontSize: 48,
        fontWeight: 'bold'
    },
    UberPasspg_frst_uprate: {
        fontSize: 24,
        color: '#EDF6FF'
    },
    UberPasspg_frst_updtrt: {
        color: '#979797',
        fontSize: 18
    },
    UberPasspg_frst_upmembersp: {
        color: '#EDF6FF', fontSize: 17
    },
    UberPasspg_scnd_cont: {
        height: "40%",
        width: '100%',
        paddingHorizontal: '6%',
        justifyContent: 'space-around',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2
    },
    UberPasspg_scnd_cntr1: {
        flex: 0,
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'center',
    },
    UberPasspg_scnd_cntr_contnt_box: {
        paddingLeft: '4%',
        width: '85%',
        height: '100%',
        flex: 0,
        flexDirection: 'column',
    },
    UberPasspg_scnd_cntr_contnt1: {
        color: '#EDF6FF',
        fontWeight: '500',
        fontSize: 18,

    },
    UberPasspg_scnd_cntr_contnt2: {
        color: '#DADADA',
        fontSize: 14,
        fontWeight: '400',
        paddingTop: '1%'
    },
    UberPasspg_scnd_cntr2: {
        flex: 0,
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'center',
    },
    UberPasspg_scnd_cntr3: {
        flex: 0,
        flex: 0,
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'center'
    },
    UberPasspg_trd_cont: {
        height: "10%",
        justifyContent: 'center',
        paddingHorizontal: '6%',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2
    },
    UberPasspg_trd_lmbtn: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    UberPasspg_trd_lmlbl: {
        color: '#ffffff',
        fontSize: 18
    },
    UberPasspg_frth_cont: {
        height: "12%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    UberPasspg_frth_btn: {
        borderColor: '#EDF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 40,
        borderWidth: 1
    },
    UberPasspg_frth_wfree: {
        color: '#EDF6FF',
        fontSize: 24
    },
    //Account Settings Styles

    AccSetngs_main_cont: {
        width: '100%',
        height: '100%'
    }, AccSetngs_cont: {
        width: '100%',
        height: '90%',
        backgroundColor: '#1A1A1A'
    },
    AccSetngs_prfl_cont: {
        height: '15%',
        width: '100%',
        paddingHorizontal: '6%',
        paddingTop: '6%',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    AccSetngs_prfl_img: {
        width: 80,
        height: 80,
    }, AccSetngs_prfl_contnt: {
        paddingLeft: '5%',
    },
    AccSetngs_prfl_contnt_nm: {
        color: '#ffffff',
        fontSize: 22
    },
    AccSetngs_prfl_contnt_pncntr: {
        flex: 0,
        flexDirection: 'row',
        paddingTop: '2%'
    },
    AccSetngs_prfl_contnt_pnfrnt: {
        color: '#EDF6FF',
        fontSize: 19
    },
    AccSetngs_prfl_contnt_pnbck: {
        color: '#EDF6FF',
        fontSize: 19,
        paddingLeft: '2%'
    },
    AccSetngs_favrts_cont: {
        width: '100%',
        height: 'auto',
        flex: 0,
        flexDirection: 'column',
        paddingLeft: '7%',
        paddingTop: 10
    },
    AccSetngs_favrts_lbl: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },
    AccSetngs_work_contr: {
        width: '100%',
        height: 'auto',
        paddingTop: 25
    },
    AccSetngs_work_ttl: {
        flex: 0,
        flexDirection: 'row',

    },
    AccSetngs_work_homeicn: {
        color: '#ffffff', fontSize: 18
    },
    AccSetngs_work_homelbl: {
        color: '#DADADA',
        fontSize: 18,
        paddingLeft: '4%'
    },
    //Onboarding styles///////////////////////////////////////////////////////////////////////////////////
    //Onboard Account styles
    onb_acc_mncntr: {
        backgroundColor: '#1976D2',
        height: hp('100%'),
        width: wp('100%'),
        paddingTop: hp('25%'),
        alignItems: 'center'
    },
    onb_acc_uber_cntr: {
        borderWidth: 0,
        borderRadius: 30,
        height: hp('30%'),
        width: wp('60%'),
        alignItems: "center",
        elevation: 5,
        justifyContent: 'center'
    },
    onb_acc_uber_lbl: {
        fontSize: 64, color: '#EDF6FF'
    },
    //Onboard login page styles
    onbo_log_main: {
        backgroundColor: '#276FDD',
    },
    onb_log_mn_cntr: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        paddingTop: hp('25%')
    },
    onb_log_whole: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    onb_log_arrowimg: {
        height: 60,
        width: 80,

    },
    onb_log_uber_lbl: {
        fontSize: 64,
        color: '#EDF6FF',
        textAlign: 'center'
    },
    onb_log_muvwtsft_txt: {
        fontSize: 18,
        color: '#EDF6FF',

        textAlign: 'center'
    },
    onb_log_iconwhole: {
        flex: 0,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 16.73,
        width: wp('80%'),
        borderColor: '#fff',
        marginTop: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    onb_log_chk_shld: {
        fontSize: 26,
        color: '#EDF6FF',
        paddingLeft: wp('2%')
    },
    onb_log_gtsrtd_cont: {
        flex: 0,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        width: wp('90%'),
        borderColor: '#fff',
        marginTop: hp("12%"),
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onb_log_gtsrtd_lbl: {
        fontSize: 25,
        color: '#EDF6FF'
    },
    onb_log_gtsrtd_txt: {
        fontSize: 25,
        color: '#EDF6FF',
        paddingLeft: 15
    },

    //OnboardBackNavigator styles
    Onbcknav_macontr: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        paddingLeft: '6%',

    },

    Onbcknav_lefticon: {
        fontSize: 23,
        color: '#ffffff'
    },
    //OnboardPhonenumber Styles
    Onb_pn_mnctnr: {
        backgroundColor: '#1A1A1A',
    },
    Onb_pn_hdr: {
        height: hp('10%'),
        width: wp('100%'),

    },
    Onb_pn_sbcntr: {

        height: hp('100%'),
        width: wp('100%'),
        paddingHorizontal: wp('6%')

    },
    onb_mn_flgwlcntr: {
        flex: 0,
        flexDirection: 'row',
        paddingTop: hp('4%'),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    Onb_pn_mnctnr_flag: {
        width: 30,
        height: 23
    },
    onb_pn_flg_dwn: {
        color: 'white',
        fontSize: 10,

    },
    onb_pn_cntrycd: {
        fontSize: 20,
        color: '#ffffff'
    },
    onb_pn_mninpt: {
        fontSize: 18,
        color: '#EDF6FF',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        width: wp('60%')
    },
    onb_pn_sndotp_cntr: {
        width: wp('88%'),
        display: 'flex',
        marginTop: 20,
        borderRadius: 20
    },
    onb_pn_cnctsmd: {
        color: '#535AFF',
        marginTop: 20,
        fontSize: 24
    },
    onb_pn_rgtarrow: {
        fontSize: 25,
        color: '#535AFF'
    },
    onb_pn_entrotp_cnt: {
        fontSize: 25,
        marginTop: 60,
        color: '#EDF6FF'
    },
    onb_pn_entrotp_inpt: {
        marginTop: 20,
        fontSize: 18,
        color: '#EDF6FF',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        width: wp('88%')
    },
    onb_pn_btn_actns_cntr: {
        marginTop: 20
    },
    onb_pn_resend_btn: {
        marginTop: 20
    },
    //Onboard social page styles
    onb_social_main_cont: {
        backgroundColor: '#1A1A1A'

    },
    onb_social_subcntr: {
        height: hp('100%'),
        width: wp('100%'),
        paddingHorizontal: wp('6%')
    },
    onb_social_chusac: {
        color: '#EDF6FF',
        fontSize: 30
    },
    onb_social_fcbk_contr: {
        flex: 0,
        flexDirection: 'row',
        marginVertical: hp('2%')
    },
    onb_social_fcbk_img: {
        height: 30,
        width: 40,
        marginLeft: 15,
        marginRight: 50
    },
    onb_social_fcbk_lbl: {
        color: 'white',
        width: 409,
        height: 33,
        fontSize: 24
    },
    onb_social_ggl_contr: {
        flex: 0,
        flexDirection: 'row',
        marginVertical: hp('2%')
    },
    onb_social_tc: {
        color: '#EDF6FF',
        fontSize: 14,
        lineHeight: 16.41
    },
    onb_social_next: {
        borderWidth: 1,
        borderColor: '#EDF6FF',
        height: 58,
        marginTop: hp('40%'),
        justifyContent: 'center',
        borderRadius: 2
    },
    onb_social_nxttxt: {
        color: 'white', fontSize: 21, left: 150
    },
    // Firstnames page styles
    onb_frst_mn_cntr: {
        backgroundColor: '#1A1A1A'
    },
    onb_nms_hdr: {
        height: hp('10%'),
        width: wp('100%'),
    },
    onb_nms_cntr: {
        height: hp('100%'),
        width: wp('100%'),
        paddingHorizontal: wp('6%')
    },
    onb_nms_nmtxtfld: {
        color: '#EDF6FF',
        height: 33,
        fontSize: 30
    },
    onb_nm_nms_whlocntr: {
        flex: 0,
        flexDirection: 'row',
        marginTop: hp('5%'),
    },
    onb_nm_nms_frst: {
        color: '#EDF6FF',
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#EDF6FF',
        width: wp('40%')
    },
    onb_nm_nms_lst: {
        color: '#EDF6FF',
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#EDF6FF',
        width: wp('40%'),
        marginLeft: '5%'
    },
    onb_nm_nxtbtncont: {
        borderWidth: 1,
        borderColor: '#EDF6FF',
        height: 58,
        marginTop: hp('55%'),
        width: wp('88%'),
        justifyContent: 'center',
        borderRadius: 2
    },
    onb_nm_nxtlbl: {
        color: 'white',
        fontSize: 21,
        left: 150
    },
    //onboard profile page styles
    onb_prpl_main_cntr: {
        backgroundColor: 'red',
        width: wp('100%'),
        height: hp('100%'),
    },
    onb_prpl_hdr: {
        width: wp('100%'),
        height: hp('10%')
    },
    onb_prpl_sub_cntr: {
        backgroundColor: '#1A1A1A',
        paddingTop: hp('15%'),
        height: hp('100%'),
        paddingHorizontal: wp('6%')
    },
    onb_prpl_prplimg_cntr: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onb_prpl_prplimg: {
        height: 130,
        width: 130,

    },
    onb_prpl_prplfrstcntnt: {
        width: 341,
        height: 97,
        marginTop: hp('5%'),
        color: '#EDF6FF',
        fontSize: 20,
        lineHeight: 23.14
    },
    onb_prpl_tndc: {
        color: '#535AFF',
        fontSize: 16,
        lineHeight: 17.58,
        paddingLeft: 2,
        top: hp('0.5%')
    },
    ond_prpl_lstcntnt: {
        marginTop: hp('5%'),
        color: '#EDF6FF',
        fontSize: 16,
        lineHeight: 17.58
    },
    onb_prpl_pvcyplcy: {
        color: '#535AFF',
        fontSize: 16,
        lineHeight: 17.58,
        paddingLeft: 2,
        top: hp('0.5%')
    },
    onb_prpl_nxt_cntr: {
        borderWidth: 1,
        marginTop: hp('15%'),
        backgroundColor: '#000000',
        borderColor: '#EDF6FF',
        width: wp('88%'),
        height: 58,
        justifyContent: 'center',
        borderRadius: 2
    },
    onb_prpl_nxtbtn_txt: {
        color: 'white',
        fontSize: 21,
        left: 150

    },
    //Onbording Payment page styles
    onb_paymnt_main_cntr: {
        backgroundColor: '#1A1A1A',
        height: hp('100%'),
        width: wp('100%'),
        paddingHorizontal:wp('6%'),
    },
    onb_paymnt_main_subcntr:{
        width:wp('88%'),
        height:hp('100%'),
    },
    onb_paymnt_dothisltr_cnr:{
        marginTop:'10%'
    },
    onb_paymnt_dothisltr_lbl:{
        color: '#535AFF',  
        paddingLeft:wp('45%'),
        fontSize: 20
    },
    onb_paymnt_paymntmtd:{
        color: '#EDF6FF',  
        marginTop:hp('5%'),
        fontSize: 20
    },
    onb_paymnt_cardsmn_cntnr:{
        flex:0,
        flexDirection:'column',
        marginTop:hp('2%')
    },
    onb_paymnt_credtcrd_cntr:{
        display: 'flex', 
        flexDirection: 'row', 
       marginVertical:hp('1%')
    },
    onb_paymnt_card_imgs:{
        height: 50, 
        width: 50
    },
    onb_paymnt_next_cntnr:{
        borderWidth: 1, 
        borderColor: '#EDF6FF', 
        marginTop:hp('30%'),
        height: 58, 
        justifyContent: 'center', 
        borderRadius: 2 
    }

})

export default styles;