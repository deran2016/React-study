import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, Box } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";

function NoticeList() {
    const [notices, setNotices] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                setError(null);
                setNotices(null);
                setLoading(true);

                const response = await axios.get("http://localhost:8080/notice/" + page);
                setNotices(response.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchNotices();
    }, [page]);

    function tableDatas(notices) {
        const url = "https://www.skku.edu/skku/campus/skk_comm/notice01.do"
        const datas = notices.map((notice) => 
            <TableRow key={notice.no}>
                <TableCell align="center">{notice.no}</TableCell>
                <TableCell align="left">
                    <Link href={url + notice.href} color="inherit">
                        {notice.title}
                    </Link>
                </TableCell>
                <TableCell align="right">{notice.date}</TableCell>
                <TableCell align="right">{notice.views}</TableCell>
            </TableRow>
        );
        return datas;
    }

    function goPrevPage() {
        if (page > 1) setPage(page - 1);
    }

    function goNextPage() {
        setPage(page + 1);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!notices) return null;
    return (
        <>
            <Box align="center">
                <IconButton display="inline" onClick={goPrevPage}>
                    <ChevronLeft></ChevronLeft>
                </IconButton>
                <Typography variant="body1" display="inline">
                    {page}
                </Typography>
                <IconButton display="inline" onClick={goNextPage}>
                    <ChevronRight></ChevronRight>
                </IconButton>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">NO</TableCell>
                            <TableCell align="center">제목</TableCell>
                            <TableCell align="right">날짜</TableCell>
                            <TableCell align="right">조회수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableDatas(notices)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default NoticeList;