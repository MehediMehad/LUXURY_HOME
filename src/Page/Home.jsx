import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import { useContext } from "react";
import Card from "../components/Card";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const { houses } = useContext(AuthContext)

    return (
        <div className="mx-auto ">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            {/* more add */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mx-24 gap-x-16 ">
                {
                    houses.map(house => <Card
                        key={house.id}
                        house={house}
                    ></Card>)
                }
            </div>
            {

            }
        </div>
    );
};

export default Home;