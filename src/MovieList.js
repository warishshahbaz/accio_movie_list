import React, { useState } from "react";

function MovieList({ data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val?.title}</td>
                <td>{val?.genre}</td>
                <td>{val?.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
