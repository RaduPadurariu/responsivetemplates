import React from "react";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "1rem",
          fontWeight: "400",
        },
      },
    },
  },
});

export default function MoviesCustomPagination({ setPage, numOfPages, page }) {
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
