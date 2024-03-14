import hungerinfo from "./../assets/hungerinfo.png";


const SecondBanner = () => {
 
    return (
        <section className="flex space-x-20 py-20 bg-white">
            <div className="w-1/2 flex mx-20 flex-col justify-center">
                <div className="border-4 border-double border-orange-400 rounded p-4">
                    <p className="text-black">
                        According to a report by the National Alliance to End Homelessness, around 568,000 people experience homelessness on any given night in the United States alone. Hunger is a prevalent issue among the homeless population, with many struggling to find access to nutritious food on a regular basis. In fact, a study by Feeding America found that 46% of households with at least one adult experiencing homelessness had to choose between food and other necessities like rent or medical care. This highlights the critical need for food donation programs to help address the issue of hunger among the homeless population.
                    </p>
                </div>
            </div>
            <div className="w-1/2 pr-10 my-5 border-4 border-double border-black rounded p-4">
                <img src={hungerinfo} alt="" />
            </div>
        </section>
    )
}

export default SecondBanner