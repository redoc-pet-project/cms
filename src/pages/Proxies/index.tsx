import { AddCircleOutlineRounded } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  IconButton,
  Input,
  InputAdornment,
  Link,
  NativeSelect,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useProxies } from "~/hooks/useProxies";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { useRef } from "react";

export const Proxies = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const { proxies, meta, refresh } = useProxies({
    page,
    limit,
    search,
    sortKey: "createdAt",
    orderBy: "DESC",
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      refresh({
        page,
        limit,
        search: value,
        sortKey: "createdAt",
        orderBy: "DESC",
      });
    }, 500);
  };

  const handleSortKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    refresh({
      page,
      limit,
      search,
      sortKey: value,
      orderBy: "DESC",
    });
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    refresh({
      page: newPage,
      limit,
      sortKey: "createdAt",
      orderBy: "DESC",
    });
  };

  useEffect(() => {
    setPage(meta.page);
    setLimit(meta.limit);
  }, [meta]);

  return (
    <MainLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/proxies">
          Proxies
        </Link>
      </Breadcrumbs>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        Proxy List
      </Typography>
      <div
        style={{
          background: "white",
          width: "100%",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          marginTop: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <Input
            type="text"
            placeholder="Search"
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={handleSearchChange}
          />
          <Box sx={{ display: "flex", gap: "25px" }}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<AddCircleOutlineRounded />}
              sx={{ color: "white" }}
            >
              Create
            </Button>

            <NativeSelect
              sx={{ minWidth: "150px" }}
              defaultValue={30}
              inputProps={{
                name: "sortBy",
                id: "sort-by",
              }}
              onChange={handleSortKeyChange}
            >
              <option hidden={true} value={""}>
                Sort key
              </option>
              <option value={"createdAt"}>Created At</option>
              <option value={"ip"}>IP</option>
              <option value={"type"}>Type</option>
              <option value={"status"}>Status</option>
            </NativeSelect>
          </Box>
        </Box>
        <Box sx={{ overflowX: "auto", width: "100%" }}>
          <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table
              sx={{ minWidth: 1400, width: "fit-content" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">ID</StyledTableCell>
                  <StyledTableCell align="center">IP</StyledTableCell>
                  <StyledTableCell align="center">Port</StyledTableCell>
                  <StyledTableCell align="center">Type</StyledTableCell>
                  <StyledTableCell align="center">Country</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">Description</StyledTableCell>
                  <StyledTableCell align="center">Vendor</StyledTableCell>
                  <StyledTableCell sx={{ width: "150px" }} align="center">
                    Category
                  </StyledTableCell>
                  <StyledTableCell align="center">Created At</StyledTableCell>
                  <StyledTableCell align="center">Updated At</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {proxies.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.ip}</StyledTableCell>
                    <StyledTableCell align="center">{row.port}</StyledTableCell>
                    <StyledTableCell align="center">{row.type}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.country}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.vendor.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "center",
                        }}
                      >
                        {row.categories.map((c) => {
                          return (
                            <Chip
                              key={c.id}
                              label={c.name}
                              color="primary"
                              sx={{ color: "white" }}
                            />
                          );
                        })}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {new Date(row.createdAt).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {new Date(row.updatedAt).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={0}
                      >
                        <Tooltip title="Edit">
                          <IconButton color="primary">
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton color="error">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                      <Box sx={{ display: "flex", gap: "5px" }}></Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px",
            padding: "15px",
          }}
        >
          <Stack spacing={2}>
            <TablePagination
              rowsPerPage={limit}
              count={meta.total}
              page={page}
              color="primary"
              component={"div"}
              onPageChange={handleChangePage}
              onRowsPerPageChange={() => {}}
            />
          </Stack>
        </Box>
      </div>
    </MainLayout>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5f5f5",
    color: theme.palette.common.black,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {},
  // hide last border
  "&:last-child td, &:last-child th": {},
}));
