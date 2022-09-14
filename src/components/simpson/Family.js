import Simpsons from "./Simpsons";
import  "./main.css";

export default function Family () {

    return(

            <div className="family">
                <h1>Simpson family</h1>
                <div className="simpsonFamily">
                    <Simpsons
                    itemName={'Bart'}
                    pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                />
                    <Simpsons
                        itemName={'Homer'}
                        pic={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}
                    />
                    <Simpsons
                        itemName={'Marge'}
                        pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
                    />
                    <Simpsons
                        itemName={'Maggie '}
                        pic={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
                    />
                    <Simpsons
                        itemName={'Lisa '}
                        pic={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}
                    />
                </div>


            </div>
        // </div>
    )

}