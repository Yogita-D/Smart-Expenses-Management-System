import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


function CategoryExpenseChart({ categorySummary }) {
    const COLORS = ["#FF0000", // Travel
   "#00FF00", // Food
   "#0000FF", // Bills
   "#FFA500"  // Shopping
   ];

    return (
        <div className='chart'>
            <ResponsiveContainer>
                <PieChart width={50} height={100}>
                    <Pie
                        data={categorySummary}
                        cx={280}
                        cy={135}
                        innerRadius={80}
                        outerRadius={110}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="amount"
                        label
                    >
                        {categorySummary.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend dataKey='category' />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>


    )
}

export default CategoryExpenseChart;