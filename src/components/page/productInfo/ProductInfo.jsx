import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button, Spinner } from "flowbite-react";
import Mycontaxt from "../../../contaxt/Mycontaxt";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../FIREBASE/Firebaseconfing";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const context = useContext(Mycontaxt);
  const { loading, setLoading } = context;
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const getProductData = async () => {
    setLoading(true);
    try {
      const productdata = await getDoc(doc(db, "products", id));
      setProduct(productdata.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Layout>
      <div className="flex gap-52  px-20 py-20">
        {loading && <Spinner />}
        <Card className=" w-96  ">
          <CardHeader floated={false} className="h-96">
            <img src={product?.productImageUrl} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center ">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2"
            ></Typography>
            <Typography
              color="blue-gray"
              className="font-medium"
              textGradient
            ></Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <FaFacebook />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <FaTwitter />{" "}
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <FaInstagram />{" "}
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>

        <div className="h-96 mt-7 w-96">
          <h2 className="font-semibold text-lg py-2">
            "Printed Floral Shirt Collar Men's Floral Shirt - Hawalili"
          </h2>

          <p className="text-2xl font-bold py-3">$2000.00</p>

          <h1 className="text-2xl py-3">Description : </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            tempora quas molestiae atque at aliquam repellat, expedita iure
            magni! Pariatur atque perferendis animi iusto et amet, quae nostrum
            tempora magni omnis eaque commodi, maiores ducimus quos repellendus
            ex, ut delectus libero totam dolor modi. Est enim fugiat esse sunt
            nesciunt.
          </p>
          <Button className="px-32 mt-6 bg-yellow-300">Add To Cart</Button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductInfo;
