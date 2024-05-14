import React, { useState, useEffect, useMemo, useRef } from 'react';
import Table from '@splunk/react-ui/Table';

const ExportTable = ({dependencyApps}) => {
    return (
        <div>
            <Table>
            <Table.Head>
                <Table.HeadCell>Present</Table.HeadCell>
                <Table.HeadCell>Apps</Table.HeadCell>
            </Table.Head>
            <Table.Body>
                {dependencyApps.map((row, i) => (
                    <Table.Row
                        data={row}
                        key={i}
                    >
                        <Table.Cell>{row.Present}</Table.Cell>
                        <Table.Cell>{row.App}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            </Table>
        </div>
    )
};

export default ExportTable;