let a="abcadeecfb"
let ans =new Set(a)
ans=[...ans]
ans=ans.join('')
console.log(ans)

//2
                  let b="abcadeecfb"
                    let ans1=new Map()
                    for(let str of b){
                        if(ans1.has(str)){
                            ans1.set(str,ans1.get(str)+1)
                        }
                        else{
                            ans1.set(str,1)
                        }
                    }
                    for(let [key,value] of ans1){
                        console.log(`${key}=${value}`)
                    }