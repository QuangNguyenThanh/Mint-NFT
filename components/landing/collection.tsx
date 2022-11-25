import Image from "next/image";
import * as React from "react";
import collection_img from "../../public/images/banner.png";
interface CollectionProps {}
const listCollection = {
  title: "Sparkminds JSC",
  minted: "3333/3334",
  imgUrl: collection_img,
};
const Collection: React.FunctionComponent<CollectionProps> = (props) => {
  return (
    <div className="collection">
      <h1>🔥 Collections</h1>
      <div className="collection__list">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="collection__list__item" key={index}>
            <Image
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/launch-my-nft.appspot.com/o/Users%2FHUhn7b8iBARZkEmLvqcGV7MfenFv6jybrpV2bX4q7TpF%2FCollections%2FrmAwoV3gVCNA7XAqVrib%2Fcover?alt=media&token=2a27ea91-5d34-4b2b-ac5d-e7698bfc4236"
              width={64}
              height={64}
            />
            <div className="collection__list__item__info">
              <p>{listCollection.title}</p>
              <span>{listCollection.minted} Minted</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
