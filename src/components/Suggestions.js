import { useRef, useState } from "react";


function Suggestions(){
    
    const fruitListRef = useRef();
    const fruitList = ["Abiu", "Açaí", "Acerola", "Akebi", "Ackee", "African-Cherry-Orange", "American-Mayapple", "Apple", "Apricot", "Araza", "Avocado", "Banana",
    "Bilberry", "Blackberry", "Blackcurrant", "Black-sapote", "Blueberry", "Boysenberry", "Breadfruit", "Cactus-pear", "Canistel", "Cashew",
    "Cempedak", "Cherimoya", "Cherry", "Chico-fruit", "Cloudberry", "Coco-De-Mer", "Coconut", "Crab-apple", "Cranberry", "Currant", "Damson",
    "Dragonfrui", "Durian", "Egg-Fruit", "Elderberry", "Feijoa", "Fig", "Finger-Lime", "Caviar-Lime", "Goji-berry", "Gooseberry",
    "Grape", "Raisin", "Grapefruit", "Grewia-asiatica", "Guava", "Hala-Fruit", "Honeyberry", "Huckleberry", "Jabuticaba", "Plinia", "Jackfruit",
    "Jambul", "Japanese-plum", "Jostaberry", "Jujube", "Juniper-berry", "Kaffir-Lime", "Kiwano", "horned-melon", "Kiwi", "Kumquat", "Lemon",
    "Lime", "Loganberry", "Longan"]
    
    const [Result, setResult] = useState([])
    const [buy, setBuy] = useState([])
    const [store, setStore] = useState([])
    
    function itsThis() {
        let results = [];
        const compraRef = buiingRef.current.value;
        for (let item of fruitList){
            if (item.toLowerCase().includes(compraRef.toLowerCase())){
                results.push(item);
            }
        }
        setResult(results);
        if (compraRef == "") {setResult([])}
    }

}
export default Suggestions;