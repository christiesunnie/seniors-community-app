import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import paginationStyles from "../Pagination/Pagination.module.css";

import Pagination from "../Pagination/Pagination";

type residentsListProps = {
  residentsList: any[];
};

let pageSize = 10;

const ResidentsList: React.FC<residentsListProps> = ({ residentsList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentResidentsList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return residentsList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const convertedDateFunc = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={styles.app}>
      <h2>Residents List</h2>
      <p className={styles["link-return"]}>
        <Link to="/">Return home</Link>
      </p>
      <Pagination
        className={paginationStyles["pagination-bar"]}
        currentPage={currentPage}
        totalCount={residentsList.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div>
        <ul className="ui cards centered grid container">
          {currentResidentsList.map((resident: any) => {
            const {
              name,
              birthday,
              gender,
              hobbies,
              levelOfCare,
              userId,
              roomNumber,
              moveInDate,
            } = resident;

            const convertedMoveInDate = convertedDateFunc(moveInDate);

            return (
              <li key={userId} className="ui card four wide column">
                <div className="content">
                  <a className="header">{name}</a>
                  <div className="meta">
                    <span className="date">Moved in {convertedMoveInDate}</span>
                  </div>
                  <div className="description">
                    <p>Room: {roomNumber}</p>
                    <p>Gender: {gender}</p>
                    <p>
                      Birthday: {new Date(birthday).toLocaleDateString("en-US")}
                    </p>
                    <p>Level of care: {levelOfCare}</p>
                    <p>Hobbies: {hobbies}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResidentsList;
