import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
import Table from "../components/Table";

function DataSet() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();
			if (!session) {
				signIn();
			} else {
				setLoading(false);
			}
		};
		securePage();
	}, []);

	if (loading) {
		return <h2>Loading</h2>;
	}
	return (
		<div>
			<Table />
		</div>
	);
}

export default DataSet;
