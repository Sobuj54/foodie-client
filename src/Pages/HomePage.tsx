import landingImg from "../assets/images/landing.png";
import app from "../assets/images/appDownload.png";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold text-orange-600 tracking-tight">
                    Order Your Favorite Food Now!
                </h1>
                <span className="text-xl">Food is just click away!</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImg} alt="mobile img" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h3 className="font-bold tracking-tighter text-3xl">
                        Oder takeaway even faster!
                    </h3>
                    <p>
                        Download Foodie app for faster ordering and personalized recommendations.
                    </p>
                <img src={app} alt="app img" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;