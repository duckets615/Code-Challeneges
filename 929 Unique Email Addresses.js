//not finished


//   929 UNIQUE EMAIL ADDRESSES


/* Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will

be forwarded to my@email.com.  (Again, this rule does not apply for domain names.) It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?   */



// function uniqueEmail(array) {
//     let email = [];
//     email.push(array.map(ele => ele = ele.split('.').join('').slice(0, ele.indexOf('+'))))
//     console.log(email);
    
// }

// function uniqueEmail(array) {
    //     let email = [];
    //     for (let i = 0; i < array.length; i++) {
        //         let idx = array[i].indexOf('@');
        //         array[i] = array[i].slice(0, idx);
        //         if (array[i].includes('+')) {
            //             let idx2 = array[i].indexOf('+');
            //             email.push(array[i].slice(0, idx2).split('.').join(''))
            //         } else {
                //             email.push(array[i]);
                //         }
                //     } 
                //         console.log(email);
                
                //        return new Set(...email)
                // }
                
                
function numUniqueEmails(array) {
    let ar = [];
    let email = Array.from(array.map(ele => ele = ele.slice(0, ele.indexOf('+')).slice(0, ele.indexOf('@')).replace(/[.]/g, '')));
    email.map(ele => ar.indexOf(ele) === -1 ? ar.push(ele) : ele = ele);
    return ar.length;
}



console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])) // 2
console.log(numUniqueEmails([
"j+ezsorqlmc@rfpycgjuf.com",
"j+k+ri+rigt.ad@rfpycgjuf.com",
"hfmeqzk.isx+i@fiidmdrsu.com",
"j+p+h+d+d+p+z.j.k.g@rfpycgjuf.com",
"zygekdy.l.w+s@snh.owpyu.com",
"j+m.l+ia+qdgv+w@rfpycgjuf.com",
"r+hwbjwefkp@wcjaki.n.com",
"zygekdy.l.w+d@snh.owpyu.com",
"bizdm+sz.f.a.k@il.cjjlp.com",
"hfmeqzk.isx+t@fiidmdrsu.com",
"hfmeqzk.isx+i@fiidmdrsu.com",
"bizdm+f+j+m.l.l@il.cjjlp.com",
"zygekdy.l.w+g@snh.owpyu.com",
"r+evgvxmksf@wcjaki.n.com",
"hfmeqzk.isx+h@fiidmdrsu.com",
"bizdm+lov+cy@il.cjjlp.com",
"hfmeqzk.isx+o@fiidmdrsu.com",
"bizdm+hs+qao@il.cjjlp.com",
"r+v+z+rcuznrj@wcjaki.n.com",
"j+r.kn+h.w.a.h+bh@rfpycgjuf.com",
"hfmeqzk.isx+t@fiidmdrsu.com",
"hfmeqzk.isx+a@fiidmdrsu.com",
"zygekdy.l.w+o@snh.owpyu.com",
"zygekdy.l.w+i@snh.owpyu.com",
"r+vy.u.y+f.er+aw@wcjaki.n.com",
"zygekdy.l.w+c@snh.owpyu.com",
"bizdm+wztzg@il.cjjlp.com",
"j+h.fwbsr+chp@rfpycgjuf.com",
"zygekdy.l.w+s@snh.owpyu.com",
"zygekdy.l.w+d@snh.owpyu.com",
"bizdm+qq.o.q+p@il.cjjlp.com",
"zygekdy.l.w+o@snh.owpyu.com",
"j+c+zqbq+h.dyt@rfpycgjuf.com",
"r+hl.b.i+fz.hz.t@wcjaki.n.com",
"r+cbabpf.k+w+e@wcjaki.n.com"
])) // 2
                