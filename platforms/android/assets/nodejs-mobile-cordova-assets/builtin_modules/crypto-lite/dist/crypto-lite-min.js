!function(z){function A(a){for(var c=a.length;c--;)a[c]=("0000000"+(a[c]>>>0).toString(16)).slice(-8);return a.join("")}function v(a){a=unescape(encodeURIComponent(a));for(var c=a.length,b=0,d=[];b<c;)d[b>>2]=a.charCodeAt(b++)<<24|a.charCodeAt(b++)<<16|a.charCodeAt(b++)<<8|a.charCodeAt(b++);d.len=c;return d}function y(a,c,b,d){var e=0,h=[],l=[];for(c=64<c.length?a(c,1):v(c);16>e;)h[e]=c[e]^909522486,l[e]=c[e++]^1549556828;"string"==typeof b?(b=v(b),c=b.len):c=4*b.length;e=a(l.concat(a(h.concat(b),
1,64+c)),1);return d?e:A(e)}function H(a,c){"string"==typeof a?(a=v(a),c=a.len):c=c||a.length<<2;a[c>>2]|=128<<24-(31&(c<<=3));a[(c+64>>9<<4)+15]=c;return a}function J(){function a(a){return 4294967296*(a-(a>>>0))|0}var c=0,b=2,d;a:for(;64>c;b++){for(d=2;d*d<=b;d++)if(0===b%d)continue a;8>c&&(p[c]=a(Math.pow(b,.5)));I[c++]=a(Math.pow(b,1/3))}}var n=z.crypto||(z.crypto={});n.hmac=function(a,c,b){return y(n[a],c,b)};n.pbkdf2=n.pbkdf2Sync=function(a,c,b,d,e,h){"function"==typeof e&&(h=e,e="sha1");e=
n[e]||n.sha1;b=b||1E3;var l,f,q,k,m,g=[],w=d>>2||5;for(m=1;g.length<w;m++){l=f=y(e,a,c+String.fromCharCode(m>>24&15,m>>16&15,m>>8&15,m&15),1);for(q=b;--q;)for(f=y(e,a,f,1),k=f.length;k--;)l[k]^=f[k];g.push.apply(g,l)}g=A(g).slice(0,2*d||40);if(h)h(null,g);else return g};n.sha1=function(a,c,b){for(var d,e,h,l,f,q=0,k=[],m=1732584193,g=4023233417,w=2562383102,r=271733878,p=3285377520,n=H(a,b),x=n.length;q<x;q+=16,m+=a,g+=b,w+=d,r+=e,p+=h)for(f=0,a=m,b=g,d=w,e=r,h=p;80>f;){l=f;var u;16>f?u=n[q+f]:(u=
k[f-3]^k[f-8]^k[f-14]^k[f-16],u=u<<1|u>>>31);k[l]=u;l=(20>f?(b&d|~b&e)+1518500249:40>f?(b^d^e)+1859775393:60>f?(b&d|b&e|d&e)+2400959708:(b^d^e)+3395469782)+(a<<5|a>>>27)+h+(k[f++]|0);h=e;e=d;d=b<<30|b>>>2;b=a;a=l|0}l=[m,g,w,r,p];return c?l:A(l)};var p=[],I=[];n.sha256=function(a,c,b){p[0]||J();for(var d,e,h,l,f,q,k,m,g,n=0,r=[],B=p[0],C=p[1],x=p[2],u=p[3],D=p[4],E=p[5],F=p[6],G=p[7],v=H(a,b),y=v.length,z=I;n<y;){a=B;b=C;d=x;e=u;h=D;l=E;f=F;q=G;for(g=0;64>g;)16>g?r[g]=v[n+g]:(k=r[g-2],m=r[g-15],r[g]=
(k>>>17^k<<15^k>>>19^k<<13^k>>>10)+(r[g-7]|0)+(m>>>7^m<<25^m>>>18^m<<14^m>>>3)+(r[g-16]|0)),k=(r[g]|0)+q+(h>>>6^h<<26^h>>>11^h<<21^h>>>25^h<<7)+(h&l^~h&f)+z[g++],m=(a>>>2^a<<30^a>>>13^a<<19^a>>>22^a<<10)+(a&b^a&d^b&d),q=f,f=l,l=h,h=e+k|0,e=d,d=b,b=a,a=k+m|0;B+=a;C+=b;x+=d;u+=e;D+=h;E+=l;F+=f;G+=q;n+=16}t=[B,C,x,u,D,E,F,G];return c?t:A(t)}}(this);
