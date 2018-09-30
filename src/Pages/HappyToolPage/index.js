import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Card, Toast } from 'antd-mobile';
import { Upload } from 'antd';
import mirrorSrc from '../../Resource/mirror.png';
import gamesSrc from '../../Resource/games.png';
require('../../Components/Bimwinner/Bimwinner.js');

var info={"file":{},"isDirectory":false,"folderId":15354,"option":"add","webkitRelativePath":"","ParentId":15354,"Description":"","DocCode":null,"Revision":"1.0","DocId":0}
var fileUrl=null;
const props = {
    action: 'http://zd-beta.rickricks.com/zd/api/v1s/folders/uploadfolder?info='+encodeURIComponent(JSON.stringify(info))+'&&cn=innrndMIW5nrI5CaWiWinICCniWeW0nIiIWrn5iniBMaW0Can2n0nIWWCnMWiBndCICMCdnMMdWWnnninBidMan2iIWoiCCMWiWIWnCdnCiBM0M0',
    onChange({file, fileList}){
        if(file.status !== 'uploading'){
            var fileid=file.response.obj[0].fileid;
            fileUrl='http://zd-beta.rickricks.com/zd/api/v1s/documents/file/download/'+fileid+'?cn=innrndMIW5nrI5CaWiWinICCniWeW0nIiIWrn5iniBMaW0Can2n0nIWWCnMWiBndCICMCdnMMdWWnnninBidMan2iIWoiCCMWiWIWnCdnCiBM0M0';
        }
    },
    defaultFileList: null
};
class HappyToolPage extends Component {
    goGame(){
        window.location.href="http://www.kkxyx.com/";
    }
    goVizcad(){
        this.openVizcad(fileUrl);
    }
    scanCode(){

    }
    openVizcad(docUrl){
        var bw=new window.Bimwinner();
        var vc=bw.getVizcad();
        vc.url=docUrl;
        vc.open();
	}
    upload = function(c, d){
        "use strict";
        var $c = document.querySelector(c),
            $d = document.querySelector(d),
            file = $c.files[0],
            reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            $d.setAttribute("src", e.target.result);
        };
    };
    render() {
        return (
            <div>
                <Card>
                    <Card.Header
                        extra={<span>图纸预览</span>}
                    />
                    <Card.Body>
                        <div>
                            <Upload {...props}>
                                <Button>上传</Button>
                            </Upload>
                            <Button onClick={()=>this.goVizcad()}>查看</Button>
                        </div>
                    </Card.Body>
                    <Card.Footer content="2017/09/29" extra={<div>authorBy:helf</div>} />
                </Card>
                <Card>
                    <Card.Header
                        extra={<span>在线小游戏</span>}
                    />
                    <Card.Body>
                        <div>
                            <Button onClick={ ()=>this.goGame() }>开始</Button>
                        </div>
                    </Card.Body>
                    <Card.Footer content="2017/09/29" extra={<div>authorBy:helf</div>} />
                </Card>
                <Card>
                    <Card.Header
                        extra={<span>拍照</span>}
                    />
                    <Card.Body>
                        <div>
                            <input id="fileBtn" type="file" onchange="upload('#fileBtn', '#img');" accept="image/*" capture="camera"/>
                            <img src="" id="img"/>
                        </div>
                    </Card.Body>
                    <Card.Footer content="2017/09/30" extra={<div>authorBy:helf</div>} />
                </Card>
            </div>
        );
    }
}

export default HappyToolPage;
