import foodWastage from "./../assets/foodWastage.png"

const ThirdBanner = () => {
    return (
        <section className="flex space-x-20 py-5 bg-black">
            <div className="w-1/2 pr-10 my-5 border-4 border-double border-black rounded p-4">
                <img src={foodWastage} alt="" />
            </div>
            <div className="w-1/2 flex mx-20 flex-col justify-center">
                <div className="border-4 border-double border-red-600 rounded p-4">
                    <p className="text-white">
                    According to the United Nations Food and Agriculture Organization (FAO), roughly one-third of all food produced worldwide is lost or wasted each year. 
                    This amounts to approximately 1.3 billion tons of food, which could feed nearly 3 billion people. In developed countries, much of this food waste occurs
                    in households and restaurants, while in developing countries, it often happens during production and transportation. Reducing food waste not only helps to 
                    alleviate hunger but also has environmental benefits, such as reducing greenhouse gas emissions and conserving resources.                
                    </p>
                </div>
                <br/>
                <div className="border-4 border-double border-green-500 rounded p-4">
                    <p className="text-white">
                    A mere donation of RM100 (or 25USD) worth of groceries and fresh produce is enough to feed a homeless family of 4 for a week! Just a simple act of 
                    kindness can make a huge difference in the lives of those in need. So, what are you waiting for? Donate now and help us make the world a better place!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThirdBanner