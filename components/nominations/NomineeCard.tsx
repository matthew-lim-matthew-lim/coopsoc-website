import { Clickable } from "components/types";
import { NomineeData } from "../../data/types";
import Image from "next/image";
import React from "react";

import styles from "styles/modules/NomineeCard.module.scss";

interface NomineeCardProps extends NomineeData, Clickable {}

const NomineeCard = ({ data, onClick }: NomineeCardProps) => {
  const { name, image, preference } = data;

  return (
    <div className={styles["nominee-card"]}>
      <div>
        <a className="limit" onClick={onClick}>
          <Image
            alt={name}
            src={image}
            className={"card-img-top " + styles[`pref-${preference}`]}
          />
        </a>
      </div>

      <div className="card-body text-center">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default NomineeCard;
