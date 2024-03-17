
const Footer = () => {
    return (
        <div className="bg-orange-500 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-3xl text-white font-bold tracking-tight">Foodie</h3>
                <ul className="flex flex-col md:flex-row text-white font-bold tracking-tight gap-4">
                    <li>Privacy & Policy</li>
                    <li>Terms & Service</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;