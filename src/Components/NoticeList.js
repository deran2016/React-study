import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

function NoticeList() {
    const [notices, setNotices] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                setError(null);
                setNotices(null);
                setLoading(true);

                const response = await axios.get("http://localhost:8080/notice/" + 2);
                setNotices(response.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchNotices();
    }, []);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!notices) return null;
    return (
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
    );
}

export default NoticeList;