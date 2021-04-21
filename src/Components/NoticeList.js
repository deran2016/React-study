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

                const response = await axios.get("http://localhost:8080/notice");
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
        const datas = notices.map((notice) => 
            <tr key={notice.no}>
                <td>{notice.no}</td>
                <td>{notice.title}</td>
                <td>{notice.date}</td>
                <td>{notice.views}</td>
            </tr>
        );
        return datas;
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!notices) return null;
    return (
        <table>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {tableDatas(notices)}
            </tbody>
        </table>
    );
}

export default NoticeList;