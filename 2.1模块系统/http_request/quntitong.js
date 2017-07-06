var config=require('../../config')
var request=require('request');
class Quntitong{
    query_badminton_list(){
        var _this=this;
        request.post('https://tytapp.quntitong.cn/sportinterNew/androidstadium/queryStadiumAll.do',{
            form:{
                key:'value',
                authstring:config.siguoya.quntitong.query_list.authstring,
                authstring2:config.siguoya.quntitong.query_list.authstring2,
                deviceid:config.siguoya.deviceid,
                imsi:'96180C8CB30B43E6964F21F59A1BB361',
                lat:config.siguoya.lat,
                lon:config.siguoya.lon,
                mobilephone:config.siguoya.mobile,
                name:'羽毛球',
                os:'ios',
                pageIndex:'1',
                pageSize:'300',
                service:'hn',
                timestamp:(new Date()).getTime(),
                version:'2.6.7'
            }
        },function(err,httpResponse,body){
            var bodyText=JSON.parse(body);
            var result=JSON.parse(bodyText[0]['data'])
            result.forEach(function (sport_addr) {
                _this.query_badminton_detail(sport_addr)
            })
        });
    }
    query_badminton_detail(sport_addr){
        request.post('https://tytapp.quntitong.cn/sportinterNew/androidstadium/queryStore3.do',{
            form:{
                authstring:config.siguoya.quntitong.query_detail.authstring,
                authstring2:config.siguoya.quntitong.query_detail.authstring2,
                cgCode:sport_addr['code'],
                deviceid:config.siguoya.deviceid,
                imsi:'96180C8CB30B43E6964F21F59A1BB361',
                mobilephone:config.siguoya.mobile,
                os:'ios',
                service:'hn',
                sportCode:'002',
                timestamp:(new Date()).getTime(),
                version:'2.6.7'
            }
        },function (err,httpResponse,body) {
            try {
                var dateList=JSON.parse(body);
                dateList.forEach(function (date) {
                    if(date['opendate']=='2017-07-09' && parseInt(date['discount0'])>0){
                        console.log(sport_addr['name'],sport_addr['address'],'还有'+date['discount0']+'个免费场地')
                    }
                })
            }catch(exception){
                // console.log(body)
            }
        })
    }
}

var qtt=new Quntitong()
qtt.query_badminton_list();
