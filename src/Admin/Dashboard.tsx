import { Edit } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import pages from "../pages.json";
import { Link } from "react-router-dom";

const PageListItem = ({ id, title }: any) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center" }}>
            <Link to={`/admin/page-editor/${id}`}>{title} ✏️</Link>
        </div>
    );
}

const Dashboard = () => {
    return (
      <div className="AdminDashboard">
        <h1>Admin Dashboard</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{marginBottom: 0}}>Pages</h3>
            <p>Click to edit</p>
            <br />
            { pages.map(page => <PageListItem key={page.id} {...page} />) }
        </div>
      </div>
    );
}

export default Dashboard;