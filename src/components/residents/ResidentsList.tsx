import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import paginationStyles from "../Pagination/Pagination.module.css";

import Pagination from "../Pagination/Pagination";

export type residentsListProps = {
  residentsList: any[];
};

let pageSize = 12;

const ResidentsList: React.FC<residentsListProps> = ({ residentsList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentResidentsList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return residentsList
      ?.sort((resident1: any, resident2: any) => {
        if (resident1.name < resident2.name) return -1;
        if (resident1.name > resident2.name) return 1;
        return 0;
      })
      .slice(firstPageIndex, lastPageIndex);
  }, [currentPage, residentsList]);

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
        <div className="ui middle aligned divided list container">
          {currentResidentsList.map((resident: any) => {
            const { name, userId } = resident;

            return (
              <div key={userId} className="item">
                <div className="right floated content">
                  <Link to={`/residents/${userId}`} className="ui button">
                    View detail
                  </Link>
                </div>
                <img
                  className="ui avatar image"
                  src="https://picsum.photos/200/300"
                  alt=""
                />
                <div className="content">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResidentsList;
