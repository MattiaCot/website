const _0x19494f=_0x51a2;(function(_0x2c77be,_0x45d26b){const _0x4c01fd=_0x51a2,_0x18f418=_0x2c77be();while(!![]){try{const _0x19297f=parseInt(_0x4c01fd(0x129))/0x1*(parseInt(_0x4c01fd(0x11b))/0x2)+-parseInt(_0x4c01fd(0x121))/0x3+-parseInt(_0x4c01fd(0x12d))/0x4+-parseInt(_0x4c01fd(0x135))/0x5*(-parseInt(_0x4c01fd(0x125))/0x6)+parseInt(_0x4c01fd(0x13e))/0x7+parseInt(_0x4c01fd(0x131))/0x8+-parseInt(_0x4c01fd(0x12b))/0x9*(parseInt(_0x4c01fd(0x142))/0xa);if(_0x19297f===_0x45d26b)break;else _0x18f418['push'](_0x18f418['shift']());}catch(_0xed1f41){_0x18f418['push'](_0x18f418['shift']());}}}(_0x67a7,0x8666e));const owner='mattiacot',repo=_0x19494f(0x134),branch='main';let currentPath=_0x19494f(0x141);async function fetchLastModified(_0x5904bf){const _0x56c67e=_0x19494f,_0x753e93=_0x56c67e(0x137)+owner+'/'+repo+_0x56c67e(0x145)+_0x5904bf+'&sha='+branch,_0x44af0d=await fetch(_0x753e93),_0x1f01d1=await _0x44af0d[_0x56c67e(0x143)]();return _0x1f01d1[_0x56c67e(0x11e)]>0x0?new Date(_0x1f01d1[0x0][_0x56c67e(0x11d)][_0x56c67e(0x114)][_0x56c67e(0x149)])['toLocaleString']():_0x56c67e(0x122);}async function loadFiles(_0x4ab0b0){const _0x3929d4=_0x19494f,_0x5ad2c0=_0x3929d4(0x137)+owner+'/'+repo+_0x3929d4(0x12a)+_0x4ab0b0+_0x3929d4(0x12e)+branch,_0x4aaf49=await fetch(_0x5ad2c0),_0x577846=await _0x4aaf49['json'](),_0xd3433a=document[_0x3929d4(0x13f)](_0x3929d4(0x12c)),_0x1c9ecb=document['getElementById'](_0x3929d4(0x133)),_0x516b5c=document[_0x3929d4(0x13f)](_0x3929d4(0x119));_0xd3433a[_0x3929d4(0x120)]='',_0x516b5c[_0x3929d4(0x120)]=_0x3929d4(0x126)+_0x4ab0b0,currentPath=_0x4ab0b0;_0x4ab0b0!==_0x3929d4(0x141)?(_0x1c9ecb[_0x3929d4(0x138)]['display']='block',_0x1c9ecb[_0x3929d4(0x146)]=()=>goBack()):_0x1c9ecb['style'][_0x3929d4(0x13a)]=_0x3929d4(0x148);for(const _0x5463af of _0x577846){const _0x4f0281=document[_0x3929d4(0x115)]('tr'),_0x30ec53=document[_0x3929d4(0x115)]('td'),_0x1ff9a1=document[_0x3929d4(0x115)]('a');_0x1ff9a1[_0x3929d4(0x118)]=_0x5463af[_0x3929d4(0x132)];_0x5463af[_0x3929d4(0x12f)]===_0x3929d4(0x11a)?(_0x1ff9a1[_0x3929d4(0x11c)]='#',_0x1ff9a1[_0x3929d4(0x130)][_0x3929d4(0x11f)](_0x3929d4(0x139)),_0x1ff9a1[_0x3929d4(0x146)]=()=>loadFiles(_0x5463af['path'])):(_0x1ff9a1[_0x3929d4(0x11c)]=_0x5463af[_0x3929d4(0x140)],_0x1ff9a1[_0x3929d4(0x123)]=_0x3929d4(0x147),_0x1ff9a1[_0x3929d4(0x130)][_0x3929d4(0x11f)](_0x3929d4(0x13d)));_0x30ec53['appendChild'](_0x1ff9a1);const _0x15c003=document[_0x3929d4(0x115)]('td');_0x15c003['textContent']=_0x5463af[_0x3929d4(0x117)]?(_0x5463af[_0x3929d4(0x117)]/0x400)[_0x3929d4(0x13b)](0x1)+'\x20kB':_0x3929d4(0x144);const _0x38c065=document['createElement']('td');_0x38c065[_0x3929d4(0x118)]=_0x3929d4(0x127),_0x4f0281[_0x3929d4(0x128)](_0x30ec53),_0x4f0281[_0x3929d4(0x128)](_0x15c003),_0x4f0281[_0x3929d4(0x128)](_0x38c065),_0xd3433a[_0x3929d4(0x128)](_0x4f0281),_0x38c065[_0x3929d4(0x118)]=await fetchLastModified(_0x5463af[_0x3929d4(0x124)]);}}function goBack(){const _0x14b5ed=_0x19494f;let _0x3e46b6=currentPath[_0x14b5ed(0x116)]('/');_0x3e46b6[_0x14b5ed(0x13c)](),loadFiles(_0x3e46b6[_0x14b5ed(0x136)]('/')||'files');}function _0x51a2(_0x5aabbd,_0x3bb98c){const _0x67a79d=_0x67a7();return _0x51a2=function(_0x51a2ce,_0x1f2491){_0x51a2ce=_0x51a2ce-0x114;let _0x5a426c=_0x67a79d[_0x51a2ce];return _0x5a426c;},_0x51a2(_0x5aabbd,_0x3bb98c);}function _0x67a7(){const _0x521997=['https://api.github.com/repos/','style','folder','display','toFixed','pop','file','4921973BKXYvb','getElementById','download_url','files','83690OyhcYd','json','Cartella','/commits?path=','onclick','_blank','none','date','author','createElement','split','size','textContent','currentPath','dir','2LJFIdI','href','commit','length','add','innerHTML','480576qcpSdq','Data\x20non\x20disponibile','target','path','456tgGZZx','[cartella\x20radice]\x20','Caricamento...','appendChild','773519SErsVX','/contents/','1791yKVqIh','fileTable','2665180gwXWFK','?ref=','type','classList','4397808eaXHgl','name','backButton','website','66845gNYGti','join'];_0x67a7=function(){return _0x521997;};return _0x67a7();}loadFiles(currentPath);