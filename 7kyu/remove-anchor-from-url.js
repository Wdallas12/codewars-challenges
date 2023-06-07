function removeUrlAnchor(url){
    const findAnchor = url.split('').indexOf('#')
    if(findAnchor > 0){
      return url.slice(0, findAnchor)
    }else{
      return url
    }
  }
  // first I need to split the string to isolate each character
  // then I need to identify the anchor character
  // then I need to remove all characters starting from that character onward