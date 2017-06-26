export const getApi=(params)=>{
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4){
      try{
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || xhr.status === 0){
          let result = xhr.responseText || '{"status_code":-1,"err_msg":"无返回信息"}';
          if(params.dataType === 'json'){
            result = JSON.parse(result)
          }
          params.success(result)
        }else{
          alert('请求失败:'+xhr.status)
        }
      }catch(e){
        params.error(e)
      }
    }
  }
  xhr.open("get", params.url, true)
  xhr.timeout = params.timeout;
  xhr.ontimeout = ()=>{
    alert('time out')
  }
  xhr.send(null)
}