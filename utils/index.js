import { ethers } from "ethers";
import identiFi from "./identiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xc791B6446F02fDCA0CBaa075BD3d513624D2c2F8",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};
