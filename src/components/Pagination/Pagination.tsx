import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";

import styles from "./Pagination.module.css";

type paginationComponentProps = {
  onPageChange: (page: any) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = (props: paginationComponentProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    currentPage,
    siblingCount,
  });

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : null;

  return (
    <ul className={`${styles["pagination-container"]} ${className}`}>
      <li
        className={`${styles["pagination-item"]} ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={onPrevious}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className={`${styles["pagination-item"]} ${styles.dots}`}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={`${styles["pagination-item"]} ${
                pageNumber === currentPage ? "selected" : ""
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={`${styles["pagination-item"]} ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={onNext}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
