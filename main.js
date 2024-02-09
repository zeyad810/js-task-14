const product=["HP","MAC","Samsung","Oppo","Realme" ]
const  price=[4000,50000,30000,1500,2000]
const z =[];
const allArray=[]
for (let start = 0; start < product.length; start++) {
    const z =[];
    if(price[start]>=2000 && price[start]<= 50000 ){
    z.push(product[start],price[start])
    allArray.push(z)
    console.log(z)

}
}
console.log(allArray)
